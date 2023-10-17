import{s as t}from"./vue3-code-block.es.2460bd5e.js";import{C as s}from"./Constants.1a4c5247.js";import{d as r,g as l,h as m,m as e,i,p as n}from"./index.89b9ec57.js";const u={class:"row"},c={class:"col-12 col-lg-9 text-justify",style:{"max-width":"60rem"}},d=e("div",{class:"font-title1 q-pa-lg"},"Send email with JavaScript/TypeScript",-1),p={class:"q-px-lg font-text"},h=e("h5",{class:"font-title2"},"Send email without response",-1),f=e("p",null," This TypeScript code snippet includes a function sendEmailWithResponse that sends an email using the Axios library. The function accepts various parameters such as templateId, reply_to, subject, fromName, nameVariable, and body to customize the email. It returns a Promise that resolves with the response from the email sending API. ",-1),b=e("p",null," The example usage demonstrates how to call the sendEmailWithResponse function with sample parameters. The response data is logged to the console if the Promise resolves successfully, otherwise, any error encountered during the process is logged. ",-1),g={class:"q-px-lg q-pb-lg font-text"},_=e("h5",{class:"font-title2"},"Send email with response",-1),y=e("p",null," An EmailResponse interface is defined to represent the response object for sending an email. It has two properties: status (number) and id (string). ",-1),v=e("p",null," The sendEmailWithResponse function is defined, which is similar to the previous sendEmail function but with an additional functionality to receive a response from the email sending API. ",-1),w=e("p",null," Inside the sendEmailWithResponse function, a JSON object is created with the provided parameters, including an additional ID. ",-1),N=r({__name:"SendWithTypescript",setup(I){const a=`import axios from 'axios'

/**
 * Sends an email using the specified parameters.
 * @param templateId - The ID of the email template.
 * @param reply_to - An array of recipient email addresses.
 * @param subject - The subject of the email.
 * @param fromName - The name of the sender.
 * @param nameVariable - The name variable used in the email body.
 * @param body - The body of the email.
 * @returns A Promise that resolves with the response from the email sending API.
 */
const sendEmail = async (
  templateId: string,
  reply_to: string[],
  subject: string,
  fromName: string,
  nameVariable: string,
  body: string
): Promise<any> => {

const json = {
  'templateId': templateId,
  'reply_to': reply_to,
  'subject': subject,
  'fromName': fromName,
  'nameVariable': nameVariable,
  'body': body
}

return axios.post('`+window.location.protocol+"//"+window.location.host+`/api/emailsend/sendEmail', json)
}

// Example usage:
const mail_bodya = \`
  Phasellus quis varius orci. Nullam consequat diam at bibendum vulputate. 
  Suspendisse ante augue, mollis sit amet neque eu, facilisis finibus risus. Integer id tortor et est pulvinar tincidunt. 
  Vivamus aliquet molestie sapien non rutrum. 
  Curabitur viverra sodales arcu, ac tincidunt nunc elementum id. 
  Pellentesque tortor turpis, scelerisque non libero a, auctor dictum nibh. 
  Sed nec tellus vitae arcu efficitur condimentum ac ut nisi. 
  Proin vitae nibh sed quam vulputate fermentum. Sed consectetur, urna at eleifend semper, ligula urna lobortis lectus, non efficitur enim mauris sit amet augue. 
  In vel tempor arcu. 
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Nunc interdum suscipit eleifend. Duis dictum, metus in posuere auctor, ex nibh posuere erat, vitae rhoncus purus lorem nec mauris
\`

sendEmail('2e29cb92-313b-4b7a-8132-3ab4b08f3f46', ['info@hiwe-it.com'], 'Mail send from ts', 'Custom From Name', 'Tester', mail_bodya)
  .then((res) => {
    console.log(res.data);
  })
  .catch(function (error) {
    console.error(error);
  });`,o=`import axios from 'axios'

/**
 * Represents the response object for sending an email.
 */
interface EmailResponse {
  number;
  string;
}

/**
 * Sends an email with a response using the specified parameters.
 * @param templateId - The ID of the email template.
 * @param reply_to - An array of recipient email addresses.
 * @param subject - The subject of the email.
 * @param fromName - The name of the sender.
 * @param nameVariable - The name variable used in the email body.
 * @param body - The body of the email.
 * @returns A Promise that resolves with the response from the email sending API.
 */
const sendEmailWithResponse = async (
  templateId: string,
  reply_to: string[],
  subject: string,
  fromName: string,
  nameVariable: string,
  body: string
): Promise<any> => {
  const json = {
    'id': '1',
    'templateId': templateId,
    'reply_to': reply_to,
    'subject': subject,
    'fromName': fromName,
    'nameVariable': nameVariable,
    'body': body
  }

  return axios.post('`+window.location.protocol+"//"+window.location.host+`/api/emailsend/sendEmailWithResponse', json)
}

// Example usage:
const mail_bodyb = \`
  Phasellus quis varius orci. Nullam consequat diam at bibendum vulputate. 
  Suspendisse ante augue, mollis sit amet neque eu, facilisis finibus risus. Integer id tortor et est pulvinar tincidunt. 
  Vivamus aliquet molestie sapien non rutrum. 
  Curabitur viverra sodales arcu, ac tincidunt nunc elementum id. 
  Pellentesque tortor turpis, scelerisque non libero a, auctor dictum nibh. 
  Sed nec tellus vitae arcu efficitur condimentum ac ut nisi. 
  Proin vitae nibh sed quam vulputate fermentum. Sed consectetur, urna at eleifend semper, ligula urna lobortis lectus, non efficitur enim mauris sit amet augue. 
  In vel tempor arcu. 
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Nunc interdum suscipit eleifend. Duis dictum, metus in posuere auctor, ex nibh posuere erat, vitae rhoncus purus lorem nec mauris
\`

sendEmailWithResponse(
  '2e29cb92-313b-4b7a-8132-3ab4b08f3f46',
  ['info@hiwe-it.com'],
  'Mail send from ts',
  'Custom From Name',
  'Tester',
  mail_bodyb
)
  .then((res) => {
    console.log(res.data as EmailResponse)
  })
  .catch((error) => {
    console.log(error)
  });
`;return(E,j)=>(l(),m("div",u,[e("div",c,[d,e("div",p,[h,f,b,i(n(t),{code:a,lang:"ts",highlightjs:"",theme:n(s)},null,8,["theme"])]),e("div",g,[_,y,v,w,i(n(t),{code:o,lang:"ts",highlightjs:"",theme:n(s)},null,8,["theme"])])])]))}});export{N as default};
