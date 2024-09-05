/** @format */

import './VerifyEmailPage.scss';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useApiVerifyEmailMutation } from '../../hooks/useApiVerifyEmailMutation';
import { BeatLoader } from 'react-spinners';
import { useOnInit } from '../../hooks/useOnInit';
import { useSearchParams } from 'react-router-dom';
import IconBox, { MessageType } from './partials/IconBox';

const VerifyEmailPage = () => {
  const { t } = useTranslation();
  const [urlParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState<MessageType>();
  const [message, setMessage] = useState<string>();
  const verifyEmailApi = useApiVerifyEmailMutation();

  const fetchData = async () => {
    const email = urlParams.get('email');
    const token = urlParams.get('token');
    try {
      if (!email) {
        throw new Error('verifyEmailPage.missingEmail');
      }
      if (!token) {
        throw new Error('verifyEmailPage.missingToken');
      }
      const response = await verifyEmailApi({ email, token });

      if (response.data.verifyEmail.code === '200') {
        setStatus('success');
        setMessage(t('verifyEmailPage.successMessage'));
      } else {
        throw new Error('verifyEmailPage.errorMessage');
      }
    } catch (errorResponse) {
      setStatus('error');
      setMessage(t((errorResponse as Error).message ?? 'verifyEmailPage.genericErrorMessage'));
    } finally {
      setLoading(false);
    }

    if (email && token) {
    }
  };

  useOnInit(() => {
    if (urlParams) {
      fetchData();
    }
  }, [urlParams]);

  return (
    <section className="page-container page-container--box bg-primary-green text-white">
      <div className="container">
        <div className="box">
          <div className="box__col">
            <figure className="preview">
              <div className="preview__icon">
                {loading && <BeatLoader size={'2rem'} color="#fff" />}
                {status && <IconBox type={status} />}
              </div>
            </figure>
          </div>
          <div className="box__col">{message && <h2 className="message">{message}</h2>}</div>
        </div>
      </div>
    </section>
  );
};

export default VerifyEmailPage;
