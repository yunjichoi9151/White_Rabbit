import React, { useState } from 'react';
import { IoIosClose, IoIosSearch } from 'react-icons/io';
import * as S from './style';
import * as CS from '../../styles/CommonStyles';
import Header from '../../components/common/Header';
import BasicText from '../../components/common/BasicText';
import BasicInput from '../../components/common/BasicInput';
import SkillText from '../../components/common/SkillText';

function NewSkill({ inputProps }) {
  const [form, setForm] = useState({
    inputSkillValue: '',
  });

  const onChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div style={{ paddingTop: 64 }}>
      <Header
        typeLeft={'BACK'}
        typeCenter={'TEXT'}
        typeRight={'TEXT'}
        textCenter={'스킬'}
        textRight={'등록'}
        headerStyle={{
          borderBottom: `1px solid ${CS.color.contentTertiary}`,
        }}
      />
      <S.ChoiceSkill>
        <BasicText
          text="내 스킬을 선택해 주세요."
          style={{
            font: CS.font.headingMedium,
            marginBottom: 20,
          }}
        />
        <SkillText text="javascript" existIcon={true} choice={true} />
      </S.ChoiceSkill>
      <S.InputWrap>
        <BasicInput
          {...inputProps}
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
        />
        <IoIosSearch
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
        <SkillText text="javascript" existIcon={false} choice={true} />
        <SkillText text="java" existIcon={false} choice={false} />
      </S.Search>
    </div>
  );
}

export default NewSkill;
