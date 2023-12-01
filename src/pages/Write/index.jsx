import React, { useCallback, useState, useEffect, useRef } from 'react';
import * as S from './style';
import * as CS from '../../styles/CommonStyles';
import Header from '../../components/common/Header';
import InputBar from '../../components/common/InputBar';
import BasicButton from '../../components/common/BasicButton';
import BasicImage from '../../components/common/BasicImage';
import SelectBar from '../../components/common/SelectBar';
import BasicText from '../../components/common/BasicText';
import TextArea from '../../components/common/TextArea';
import { FaRegImage } from 'react-icons/fa6';
import { useNavigate, useParams } from 'react-router-dom';
import { postApi } from '../../../api/utils/Post';
import { ROUTER_LINK } from '../../router/routes';
import BasicModal from '../../components/common/BasicModal';
import { commonApi } from '../../../api/utils/Common';
import { SERVER_URL } from '../../../api';

const options = [
  { key: 'BOARD', value: 'BOARD', name: '자유게시판' },
  { key: 'REVIEW', value: 'REVIEW', name: '취업후기' },
  { key: 'QNA', value: 'QNA', name: '개발 Q&A' },
  { key: 'PROJECT', value: 'PROJECT', name: '프로젝트 모집' },
  { key: 'STUDY', value: 'STUDY', name: '스터디 모집' },
];

const Write = ({ isEdit = false }) => {
  const navigate = useNavigate();
  const { postId } = useParams();
  const [selectOption, setSelectOption] = useState('BOARD');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isTitleOver, setIsTitleOver] = useState(false);
  const [isContentOver, setIsContentOver] = useState(false);

  // CHANGE Category Data
  const handleSelectChange = (selectValue) => {
    setSelectOption(selectValue);
  };

  // CHANGE Title InputData
  const changeTitleData = (e) => {
    setTitle(e.target.value);
    if (e.target.value.length > 30) {
      setIsTitleOver(true);
    } else {
      setIsTitleOver(false);
    }
  };

  // CHANGE Content InputData
  const changeContentData = (e) => {
    setContent(e.target.value);
    if (e.target.value.length > 1000) {
      setIsContentOver(true);
    } else {
      setIsContentOver(false);
    }
  };

  // Modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Add Image
  const [selectedImage, setSelectedImage] = useState(null);
  const [imgUrl, setImgUrl] = useState('');

  const handleImageChange = async (event) => {
    try {
      const file = event.target.files[0];
      if (file) {
        setSelectedImage(file);
        setImgUrl(URL.createObjectURL(file));
        const formData = new FormData();
        formData.append('image', file);

        const res = await commonApi.postImage(formData);

        setImgUrl(res.data.data);
      }
    } catch (error) {
      console.error('Image upload failed:', error);
    }
  };

  // POST New Post & Edit Post
  const postHandler = async () => {
    if (title !== '' && content !== '' && !isTitleOver && !isContentOver) {
      try {
        if (isEdit) {
          await postApi.modifyPost(postId, {
            title: title,
            content: content,
            category: selectOption,
            image_url: imgUrl,
          });
          navigate(-1);
        } else {
          const res = await postApi.newPost(
            title,
            content,
            selectOption,
            imgUrl,
          );
          navigate(
            ROUTER_LINK.DETAIL.path.replace(':postId', res.data.data._id),
          );
        }
      } catch (error) {
        console.error('Error submitting post:', error);
      }
    } else {
      setIsModalOpen(true);
    }
  };

  // UPLOAD Image
  const fileInputRef = useRef(null);

  const handleFileButtonClick = () => {
    fileInputRef.current.click();
  };

  // EDIT & DELETE Image
  const [showImageInput, setShowImageInput] = useState(false);

  const handleEditImage = () => {
    setShowImageInput(true);
  };

  const handleDeleteImage = () => {
    setImgUrl('');
    setShowImageInput(false);
  };

  useEffect(() => {
    const loadPostData = async () => {
      if (isEdit && postId) {
        try {
          const res = await postApi.getPostByPostId(postId);
          const postData = res.data.data.post;
          setSelectOption(postData.category);
          setTitle(postData.title);
          setContent(postData.content);
          setImgUrl(postData.image_url);
        } catch (error) {
          console.error('Error loading post data:', error);
        }
      }
    };
    loadPostData();
  }, [isEdit, postId]);

  return (
    <S.WriteWrap>
      {isModalOpen && (
        <BasicModal closeModal={closeModal}>
          <BasicText
            text={
              title.length === 0 || content.length === 0
                ? '입력하지 않은 항목이 있습니다.'
                : '글자 수 제한을 초과했습니다.'
            }
            style={{ padding: '1rem', marginBottom: '0.5rem' }}
          />
          <S.BtnWrapper>
            <BasicButton
              handleOnClickButton={closeModal}
              text="닫기"
              btnStyle={{
                width: '5rem',
                height: '2rem',
                border: `1px solid ${CS.color.primary}`,
              }}
              textStyle={{ font: CS.font.labelSmall }}
            />
          </S.BtnWrapper>
        </BasicModal>
      )}
      <Header
        typeLeft={'BACK'}
        typeCenter={'TEXT'}
        typeRight={'TEXT'}
        textCenter={isEdit ? '게시물 수정' : '게시물 작성'}
        textRight={isEdit ? '수정' : '완료'}
        headerStyle={{
          borderBottom: `1px solid ${CS.color.borderTransparent}`,
        }}
        leftOnClickEvent={() => navigate(-1)}
        rightOnClickEvent={postHandler}
      />
      <SelectBar
        options={options}
        value={selectOption}
        onChange={handleSelectChange}
        style={{
          width: '90%',
          padding: '0.75rem',
          height: '2.5rem',
          margin: '1rem 0rem',
          borderRadius: '0.75rem',
          font: CS.font.labelSmall,
          color: CS.color.contentTertiary,
          border: `0.5px solid ${CS.color.contentTertiary}`,
        }}
      />
      <S.Title>
        <BasicText text="제목" style={{ font: CS.font.labelMedium }} />
        <BasicText text="*" style={{ color: CS.color.negative }} />
        <BasicText
          text={title.length + '/30자'}
          style={{
            color: isTitleOver ? CS.color.negative : CS.color.warning,
            font: CS.font.labelXS,
          }}
        />
      </S.Title>
      <InputBar
        value={title}
        placeholder="제목을 입력해주세요(최대 30자)"
        inputBarStyle={{
          width: '90%',
          height: '2.5rem',
          padding: '0.75rem',
          margin: '1rem 0rem 0.5rem 0rem',
          backgroundColor: CS.color.white,
          borderRadius: '0.75rem',
          border: `0.5px solid ${CS.color.contentTertiary}`,
        }}
        inputStyle={{
          font: CS.font.labelSmall,
          textAlign: 'left',
        }}
        handleOnChangeValue={changeTitleData}
      ></InputBar>
      <BasicText
        text="글자 수 제한을 초과했습니다"
        style={{
          color: CS.color.negative,
          font: CS.font.labelXS,
          display: isTitleOver ? 'block' : 'none',
          width: '90%',
        }}
      />
      <S.Content>
        <BasicText text="내용" style={{ font: CS.font.labelMedium }} />
        <BasicText text="*" style={{ color: CS.color.negative }} />
        <BasicText
          text={content.length + '/1000자'}
          style={{
            color: isContentOver ? CS.color.negative : CS.color.warning,
            font: CS.font.labelXS,
          }}
        />
      </S.Content>
      <TextArea
        value={content}
        placeholder="내용을 입력해주세요(최대 1000자)"
        style={{
          width: '90%',
          height: '10rem',
          padding: '0.75rem',
          margin: '1rem 0rem 0.5rem 0rem',
          backgroundColor: CS.color.white,
          borderRadius: '0.75rem',
          border: `0.5px solid ${CS.color.contentTertiary}`,
          font: CS.font.labelSmall,
          textAlign: 'left',
        }}
        handleOnChangeValue={changeContentData}
      />
      <BasicText
        text="글자 수 제한을 초과했습니다"
        style={{
          color: CS.color.negative,
          font: CS.font.labelXS,
          display: isContentOver ? 'block' : 'none',
          width: '90%',
        }}
      />
      <S.PostImage>
        {imgUrl && (
          <BasicImage
            src={`${imgUrl}` || '/assets/img/elice_icon.png'}
            alt="Preview"
            style={{
              display: 'flex',
              width: '7.5rem',
              height: '7.5rem',
              objectFit: 'cover',
              objectPosition: 'center center',
              border: `0.125rem solid ${CS.color.primary}`,
            }}
          />
        )}
      </S.PostImage>
      {imgUrl === '' ? (
        <>
          <BasicButton
            text="이미지 업로드"
            handleOnClickButton={handleFileButtonClick}
            btnStyle={{
              width: '90%',
              height: '2.5rem',
              padding: '0.75rem',
              marginTop: '1rem',
              backgroundColor: CS.color.primary,
            }}
            textStyle={{ font: CS.font.labelSmall, color: CS.color.white }}
          />
          <InputBar
            existLeft={true}
            handleOnChangeValue={handleImageChange}
            type="file"
            accept="image/*"
            inputStyle={{ font: CS.font.labelSmall }}
            inputBarStyle={{
              width: '90%',
              margin: '1rem 0rem',
              display: 'none',
            }}
            ref={fileInputRef}
          ></InputBar>
        </>
      ) : (
        <BasicButton
          text="이미지 삭제"
          handleOnClickButton={() => setImgUrl('')}
          btnStyle={{
            width: '90%',
            height: '2.5rem',
            padding: '0.75rem',
            marginTop: '1rem',
            backgroundColor: CS.color.negative,
          }}
          textStyle={{ font: CS.font.labelSmall, color: CS.color.white }}
        />
      )}
    </S.WriteWrap>
  );
};

export default Write;
