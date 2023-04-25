import styles from '../../css/Contact.module.scss';
import {css} from '../../../../helpers';
import Icon from '../Icon';
import {useContext, FC, useRef, FormEvent, useState, useEffect} from 'react';
import State, {context} from '../../../State';
import Transition from 'react-transition-group/Transition';
import emailjs from '@emailjs/browser';

function Facebook() {
  return (
    <a
      href="http://www.facebook.com/derito.angola"
      target="_blank"
      data-social="facebook"
      className={css(styles, 'form__link')}
    >
      <Icon id="facebook" fill={true} size="90%" color="#c6ab9a" />
    </a>
  );
}

function Instagram() {
  return (
    <a
      href="http://www.instagram.com/derito.angola/"
      target="_blank"
      data-social="instagram"
      className={css(styles, 'form__link')}
    >
      <span></span>
      <span></span>
    </a>
  );
}

const Form: FC<{trigger: boolean}> = props => {
  const state: context = useContext(State);
  const fields = state.language.contact.formFields;
  const form = useRef<HTMLFormElement>(null);
  const [prompt, setPrompt] = useState<string | undefined>(undefined);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm('service_9zweosw', 'template_irxrizx', form.current!, 'WvhKOQRNU2czH0l39')
      .then(
        result => {
          if (prompt === undefined) setPrompt(state.language.contact.prompt.success);
          form.current?.reset();
        },
        error => {
          if (prompt === undefined) setPrompt(state.language.contact.prompt.failure);
          form.current?.reset();
        }
      );
  };

  useEffect(() => {
    if (!state.navIsOpen) setPrompt(undefined);
  }, [state.navIsOpen]);

  return (
    <Transition in={props.trigger} timeout={300} mountOnEnter unmountOnExit>
      {(state: string) => {
        const inline = {
          transition: `opacity ${300}ms ease-out`,
          opacity: state === 'entering' || state === 'entered' ? 1 : 0,
          display: state === 'exiting' ? 'none' : undefined,
        };

        return (
          <form className={css(styles, 'form')} style={inline} onSubmit={sendEmail} ref={form}>
            <input
              type="text"
              name="from_name"
              id="name"
              placeholder={fields.name}
              className={css(styles, 'form__input', !prompt ? 'active' : '')}
              ref={nameRef}
            />
            <input
              type="email"
              name="reply_to"
              id="email"
              placeholder={fields.email}
              className={css(styles, 'form__input', !prompt ? 'active' : '')}
              ref={emailRef}
            />

            <div
              className={css(styles, 'form__buttons', !prompt ? 'active' : '')}
              data-size="small"
            >
              <Facebook />
              <Instagram />
            </div>

            <div className={css(styles, 'form__message', !prompt ? 'active' : '')}>
              <textarea
                name="message"
                ref={messageRef}
                id="message"
                placeholder={fields.message}
                className={css(styles, 'form__textarea')}
              ></textarea>

              <div className={css(styles, 'form__buttons')} data-size="large">
                <Facebook />
                <Instagram />

                <button type="submit" className={css(styles, 'form__btn')}>
                  <span>{fields.send}</span>
                  <Icon id="send" fill={true} color="#c6ab9a" size="80%" />
                </button>
              </div>
            </div>

            <div className={css(styles, 'form__prompt', prompt ? 'active' : '')}>
              <span>{prompt}</span>
              <button onClick={() => setPrompt(undefined)}>Ok</button>
            </div>
          </form>
        );
      }}
    </Transition>
  );
};

export default Form;
