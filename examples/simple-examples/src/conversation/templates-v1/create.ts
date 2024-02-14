import { CreateTemplateRequestData, templateV1Helper } from '@sinch/sdk-core';
import { getPrintFormat, initClient, printFullResponse } from '../../config';

(async () => {
  console.log('****************************');
  console.log('* Templates_CreateTemplate *');
  console.log('****************************');

  const requestData: CreateTemplateRequestData = {
    createTemplateRequestBody: {
      description: 'Template v1',
      default_translation: 'en-US',
      channel: 'CONVERSATION',
      translations: [
        {
          language_code: 'en-US',
          version: '1',
          content: templateV1Helper.buildTextMessageContent({
            text: 'Message from a template v1.',
          }),
        },
      ],
    },
  };

  const sinchClient = initClient();
  const response = await sinchClient.conversation.templatesV1.create(requestData);

  const printFormat = getPrintFormat(process.argv);

  if (printFormat === 'pretty') {
    console.log(`New template created with the id '${response.id}'.\nDefault translation: ${response.default_translation}\nList of translations: ${response.translations?.map((translation) => translation.language_code).join(', ')}`);
  } else {
    printFullResponse(response);
  }

})();
