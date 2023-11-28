import React, { useEffect, useState } from 'react';
import { IoIosClose, IoIosSearch } from 'react-icons/io';
import * as S from './style';
import * as CS from '../../styles/CommonStyles';
import Header from '../../components/common/Header';
import BasicText from '../../components/common/BasicText';
import BasicInput from '../../components/common/BasicInput';
import SkillText from '../../components/common/SkillText';
import { useNavigate, useParams } from 'react-router';
import { userApi } from '../../../api/utils/user';

function NewSkill({ inputProps }) {
  const navigate = useNavigate();

  const { userId } = useParams();

  /////// { API } /////////

  const userInfo = async () => {
    try {
      const res = await userApi.getUserInfo();
      setMySkill(res.data.data.skills);
      console.log('res', res);
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

  const handleClickSearch = async () => {
    const skillSearch = async () => {
      if (input) {
        const res = await userApi.skillSearch(input);

        setSkill(res.data.data);
      }
    };

    skillSearch();
  };

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const handleClickAddSkill = async (data) => {
    try {
      const response = await userApi.updateSkill(userId, [data._id]);

      if (response.status === 201) {
        setMySkill((prev) => prev.concat(data));
      }
    } catch (e) {
      alert(e.response.data.error);
    }
  };

  /////////////////

  const handleRemoveSkill = async (_data) => {
    const response = await userApi.updateSkill(userId, [_data._id]);

    if (response.status === 201) {
      setMySkill((prev) => prev.filter((data) => data._id === _data._id));
    }
  };

  console.log('skill', skill);
  console.log('setMySkill', setMySkill);
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
        // rightOnClickEvent={}
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
          {mySkill.map((data) => (
            <SkillText
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
        <div></div>
      </S.Search>
    </S.IntroNewSkillWrapper>
  );
}

export default NewSkill;
