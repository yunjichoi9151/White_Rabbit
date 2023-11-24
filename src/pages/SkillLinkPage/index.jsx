import React, { useEffect, useState } from 'react';
import { userApi } from '../../../api/utils/user';
import * as S from './style';
import IntroHeader from '../../components/SkillLinkIntro/IntroHeader';
import EmptyIntro from '../../components/SkillLinkIntro/EmptyIntro';
import SkillIntro from '../../components/SkillLinkIntro/SkillIntro';
import LinkIntro from '../../components/SkillLinkIntro/LinkIntro';

function SkillLinkPage() {
  const userId = { userId };
  /////// { API } /////////

  const [link, setLink] = useState([]);

  useEffect(() => {
    const linkInfo = async () => {
      try {
        const res = await userApi.userLinks(userId);
        setLink(res.data.data.link);
        console.log(res.data.data.link);
      } catch (error) {
        console.log('error: ', error.response.data);
      }
    };

    linkInfo();
  }, []);

  /////////////////
  return (
    <>
      <S.Container>
        <IntroHeader
          text="스킬"
          type="skill"
          empty={true}
          style={{ display: 'none' }}
        />
        {/* 비어있을때 */}
        <EmptyIntro text="자신의 스킬을 추가해 주세요." type="skill" />
        {/* skill API 불러왔을때 */}
        {/* <SkillIntro /> */}
      </S.Container>
      <S.UnderLine />

      <S.Container>
        <IntroHeader text="링크" type="link" empty={true} />
        {/* 비어있을때 */}
        <EmptyIntro text="자신의 링크를 추가해 주세요." type="link" />
        {/* links API 불러왔을때 */}
        {link.map((link, index) => (
          <LinkIntro key={index} text={link.title} href={link.links} />
        ))}
      </S.Container>
      <S.UnderLine />
    </>
  );
}

export default SkillLinkPage;
