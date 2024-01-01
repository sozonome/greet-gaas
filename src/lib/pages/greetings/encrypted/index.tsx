import GreetingsTemplate from '@/lib/components/GreetingsTemplates';
import type { GreetingsTemplateProps } from '@/lib/components/GreetingsTemplates/types';

import type { EncryptedGreetingPageProps } from './types';

const EncryptedGreetingPage = (props: EncryptedGreetingPageProps) => {
  const greetingTemplatesProps: GreetingsTemplateProps = props;

  return <GreetingsTemplate {...greetingTemplatesProps} />;
};

export default EncryptedGreetingPage;
