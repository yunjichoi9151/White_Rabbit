import React, { useCallback, useState, useEffect } from 'react';
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

  // CHANGE Category Data
  const handleSelectChange = (selectValue) => {
    setSelectOption(selectValue);
    console.log(selectValue);
  };

  // CHANGE Title InputData
  const changeTitleData = (e) => {
    setTitle(e.target.value);
  };

  // CHANGE Content InputData
  const changeContentData = (e) => {
    setContent(e.target.value);
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
    if (title !== '' && content !== '') {
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
    }
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
          <h2>Modal Content</h2>
          <p>This is the modal content.</p>
          <button onClick={closeModal}>Close Modal</button>
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
          margin: '1rem 0rem',
          borderRadius: '0.75rem',
          font: CS.font.labelSmall,
          color: CS.color.contentTertiary,
          border: `0.5px solid ${CS.color.contentTertiary}`,
        }}
      />
      <S.Title>
        <BasicText text="제목" style={{ font: CS.font.labelMedium }} />
        <BasicText text="*" style={{ color: CS.color.warning }} />
      </S.Title>
      <InputBar
        value={title}
        placeholder="제목을 입력해주세요."
        inputBarStyle={{
          width: '90%',
          height: '2.5rem',
          padding: '0.75rem',
          margin: '1rem 0rem',
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
      <S.Content>
        <BasicText text="내용" style={{ font: CS.font.labelMedium }} />
        <BasicText text="*" style={{ color: CS.color.warning }} />
      </S.Content>
      <TextArea
        value={content}
        placeholder="내용을 입력해주세요."
        style={{
          width: '90%',
          height: '10rem',
          padding: '0.75rem',
          margin: '1rem 0rem',
          backgroundColor: CS.color.white,
          borderRadius: '0.75rem',
          border: `0.5px solid ${CS.color.contentTertiary}`,
          font: CS.font.labelSmall,
          textAlign: 'left',
        }}
        handleOnChangeValue={changeContentData}
      />
      <S.PostImage>
        {imgUrl && (
          <BasicImage
            src={SERVER_URL + imgUrl}
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

      {(!isEdit || showImageInput) && (
        <InputBar
          existLeft={true}
          handleOnChangeValue={handleImageChange}
          type="file"
          accept="image/*"
          inputStyle={{ font: CS.font.labelSmall }}
          inputBarStyle={{
            width: '90%',
            margin: '1rem 0rem',
          }}
        ></InputBar>
      )}
      {isEdit && !showImageInput && (
        <S.ImgBtnWrap>
          <BasicButton
            text="이미지 수정"
            handleOnClickButton={handleEditImage}
            btnStyle={{
              padding: '0.5rem 1rem',
              backgroundColor: CS.color.accent2,
              marginRight: '0.5rem',
            }}
            textStyle={{ font: CS.font.labelSmall }}
          />
          <BasicButton
            text="이미지 삭제"
            handleOnClickButton={handleDeleteImage}
            btnStyle={{
              padding: '0.5rem 1rem',
              backgroundColor: CS.color.negative,
              marginLeft: '0.5rem',
            }}
            textStyle={{ font: CS.font.labelSmall }}
          />
        </S.ImgBtnWrap>
      )}
    </S.WriteWrap>
  );
};

export default Write;
