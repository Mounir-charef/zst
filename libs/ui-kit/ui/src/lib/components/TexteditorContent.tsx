'use client';

import { cn } from '@mono/util';
import { SnowTheme } from 'quill-color-picker-enhance';
import { useMemo, useRef } from 'react';
import ReactQuill, { ReactQuillProps } from 'react-quill';
// @ts-ignore
import quillEmoji from 'react-quill-emoji';
import 'react-quill-emoji/dist/quill-emoji.css';
import { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export interface TexteditorContentProps extends ReactQuillProps {
  disabled?: boolean;
}

const TexteditorContent = ({
  className,
  disabled,
  ...props
}: TexteditorContentProps) => {
  const quillRef = useRef<ReactQuill>(null);

  Quill.register(
    {
      'formats/emoji': quillEmoji.EmojiBlot,
      'modules/emoji-toolbar': quillEmoji.ToolbarEmoji,
      'modules/emoji-textarea': quillEmoji.TextAreaEmoji,
      'modules/emoji-shortname': quillEmoji.ShortNameEmoji,
      //   Font,
      'themes/snow-quill-color-picker-enhance': SnowTheme,
    },
    true,
  );

  const ImageHandler = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();
    input.onchange = async () => {
      const file = input.files ? input.files[0] : null;
      if (file) {
        const url = URL.createObjectURL(file);
        const quillEditor = quillRef?.current?.getEditor();
        const range = quillEditor?.getSelection(true);
        quillEditor!.insertEmbed(range!.index, 'image', url, 'user');
      }
    };
  };

  const formats = [
    'header',
    'font',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'align',
    'link',
    'color',
    'background',
    'script',
    'code-block',
    'image',
    'video',
    'emoji',
  ];

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [
            { header: [1, 2, 3, 4, 5, 6, false] },
            // {
            //   font: Font.whitelist,
            // },
          ],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' },
          ],
          [
            {
              color: [],
            },
          ],
          [
            {
              background: [],
            },
          ],
          [{ align: [] }],
          ['code-block'],
          ['link', 'image', 'video'],
          ['emoji'],
          [{ script: 'sub' }, { script: 'super' }],
          ['clean'],
        ],
        handlers: {
          image: ImageHandler,
        },
      },
      'emoji-toolbar': true,
      'emoji-textarea': true,
      'emoji-shortname': true,
    }),
    [],
  );

  return (
    <ReactQuill
      modules={modules}
      formats={formats}
      theme="snow-quill-color-picker-enhance"
      className={cn(
        'border-border-base relative mb-5 rounded border',
        className,
        disabled
          ? 'disabled-editor cursor-not-allowed select-none bg-[#EEF1F4]'
          : '',
      )}
      ref={quillRef}
      readOnly={disabled}
      {...props}
    />
  );
};

export default TexteditorContent;
