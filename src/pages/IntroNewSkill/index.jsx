import React, { useEffect, useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { PiPlus } from 'react-icons/pi';
import { useNavigate, useParams } from 'react-router';
import { userApi } from '../../../api/utils/user';
import * as S from './style';
import * as CS from '../../styles/CommonStyles';
import Header from '../../components/common/Header';
import BasicText from '../../components/common/BasicText';
import BasicInput from '../../components/common/BasicInput';
import SkillText from '../../components/common/SkillText';

function NewSkill({ inputProps }) {
  const navigate = useNavigate();

  const { userId } = useParams();

  /////// { API } /////////

  const userInfo = async () => {
    try {
      const res = await userApi.getUserInfo();
      setMySkill(res.data.data.skills);
    } catch (error) {
      console.log('error: ', error.response.data.message);
    }
  };

  useEffect(() => {
    userInfo();
  }, []);

  const [mySkill, setMySkill] = useState([]);
  const [skill, setSkill] = useState([]);
  const [input, setInput] = useState('');
  const [addSkillInput, setAddSkillInput] = useState('');
  const [isEmptySearch, setIsEmptySearch] = useState(false);

  const handleClickSearch = async () => {
    const skillSearch = async () => {
      if (input) {
        const res = await userApi.skillSearch(input);
        setIsEmptySearch(!res.data.data.length);

        setSkill(res.data.data);
      }
    };

    skillSearch();
  };

  const onChange = (e) => {
    const { name } = e.target;

    if (name === 'addSkill') {
      setAddSkillInput(e.target.value);
      return;
    }
    setInput(e.target.value);
  };

  const handleClickAddSkill = async (data) => {
    const skillsId = mySkill.map((skill) => skill._id);
    setMySkill((prev) => {
      if (!skillsId.includes(data._id)) {
        return prev.concat(data);
      }
      return prev;
    });
  };

  const handleClickPostSkill = async () => {
    const response = await userApi.addSkill(addSkillInput);

    if (response.status === 201) {
      setMySkill((prev) => prev.concat(response.data));
    }
  };

  /////////////////

  const handleRemoveSkill = async (_data) => {
    setMySkill((prev) => prev.filter((data) => data._id !== _data._id));
  };

  const handleClickSave = async () => {
    const skillsId = mySkill.map((skill) => skill._id);
    const response = await userApi.updateSkill(userId, skillsId);

    if (response.status === 200) {
      navigate(-1);
    }
  };

  const handleKeyDownEnter = (e, type) => {
    if (e.keyCode === 13) {
      if (type === 'addSkill') {
        handleClickPostSkill();
      } else {
        handleClickSearch();
      }
    }
  };

  return (
    <S.IntroNewSkillWrapper>
      <Header
        typeLeft={'BACK'}
        typeCenter={'TEXT'}
        typeRight={'TEXT'}
        textCenter={'스킬'}
        textRight={'등록'}
        headerStyle={{
          borderBottom: `1px solid ${CS.color.contentTertiary}`,
        }}
        leftOnClickEvent={() => navigate(-1)}
        rightOnClickEvent={handleClickSave}
      />
      <S.ChoiceSkill>
        <BasicText
          text="내 스킬을 선택해 주세요."
          style={{
            font: CS.font.headingMedium,
            marginBottom: 20,
          }}
        />
        <S.MySkillContainer>
          {mySkill?.map((data) => (
            <SkillText
              key={data._id}
              onClick={() => handleRemoveSkill(data)}
              text={data.skill}
              existIcon={true}
              choice={true}
            />
          ))}
        </S.MySkillContainer>
      </S.ChoiceSkill>
      <S.InputWrap>
        <BasicInput
          {...inputProps}
          value={input}
          style={{
            height: 50,
            font: CS.font.labelMedium,
            textAlign: 'left',
            outline: 'none',
            border: `1px solid ${CS.color.secondary}`,
            borderRadius: 10,
            paddingBottom: 0,
            paddingLeft: 16,
          }}
          placeholder="스킬을 검색해보세요."
          onChange={onChange}
          onKeyDown={handleKeyDownEnter}
        />
        <IoIosSearch
          onClick={handleClickSearch}
          style={{
            position: 'absolute',
            top: 15,
            right: 20,
            width: 20,
            height: 20,
            cursor: 'pointer',
          }}
        />
      </S.InputWrap>

      {!isEmptySearch ? (
        <S.Search>
          <BasicText
            text="검색 결과"
            style={{
              font: CS.font.headingMedium,
              marginBottom: 20,
            }}
          />
          <div style={{ display: 'flex' }}>
            {skill?.map((data, index) => (
              <SkillText
                key={`${data._id}_${index}`}
                onClick={() => handleClickAddSkill(data)}
                text={data.skill}
                existIcon={false}
                choice={false}
              />
            ))}
          </div>
        </S.Search>
      ) : (
        <>
          <S.Search
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}
          >
            <BasicText
              text="검색 결과"
              style={{
                font: CS.font.headingMedium,
              }}
            />

            <BasicText
              text="검색 결과가 없습니다. 직접 입력 해주세요."
              style={{
                font: CS.font.labelSmall,
                color: CS.color.contentTertiary,
              }}
            />
          </S.Search>

          <S.InputWrap>
            <BasicInput
              {...inputProps}
              value={addSkillInput}
              style={{
                height: 50,
                font: CS.font.labelMedium,
                textAlign: 'left',
                outline: 'none',
                border: `1px solid ${CS.color.secondary}`,
                borderRadius: 10,
                paddingBottom: 0,
                paddingLeft: 16,
              }}
              placeholder="스킬을 검색해보세요."
              onChange={onChange}
              name="addSkill"
              onKeyDown={(e) => handleKeyDownEnter(e, 'addSkill')}
            />

            <PiPlus
              onClick={handleClickPostSkill}
              style={{
                position: 'absolute',
                top: 15,
                right: 20,
                width: 20,
                height: 20,
                cursor: 'pointer',
              }}
            />
          </S.InputWrap>
        </>
      )}
    </S.IntroNewSkillWrapper>
  );
}

export default NewSkill;
