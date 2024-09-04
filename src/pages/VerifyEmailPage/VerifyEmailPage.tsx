/** @format */

import './VerifyEmailPage.scss';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useApiVerifyEmailMutation } from '../../hooks/useApiVerifyEmailMutation';
import { BeatLoader } from 'react-spinners';
import { useOnInit } from '../../hooks/useOnInit';
import { useSearchParams } from 'react-router-dom';

const VerifyEmailPage = () => {
  const { t } = useTranslation();
  const [urlParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
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
        setMessage(t('verifyEmailPage.successMessage'));
      } else {
        throw new Error('verifyEmailPage.errorMessage');
      }
    } catch (errorResponse) {
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
    <section className="page-container">
      <div className="container">
        <div className="box">
          {loading && <BeatLoader color="#fff" />}
          {message && <h3>{message}</h3>}
        </div>
      </div>
    </section>
  );
};

export default VerifyEmailPage;
