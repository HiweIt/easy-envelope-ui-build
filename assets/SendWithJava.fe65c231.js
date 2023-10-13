import{s as n}from"./vue3-code-block.es.f2e07989.js";import{C as o}from"./Constants.1a4c5247.js";import{d as r,g as c,h as p,m as e,i as a,p as t}from"./index.505ac9ba.js";const d={class:"row"},l={class:"col-12 col-lg-9 text-justify",style:{"max-width":"60rem"}},u=e("div",{class:"font-title1 q-pa-lg"},"Send email with Java",-1),h={class:"q-px-lg font-text"},m=e("h5",{class:"font-title2"},"Send email without response",-1),S=e("p",null,' This Java code snippet sends an HTTP POST request to the specified URL using HttpURLConnection. It sets the request method to "POST" and the content type to "application/json". ',-1),f=e("p",null," The JSON payload is constructed as a string and sent as the request body. The response code and the response itself are then printed to the console. ",-1),R=e("p",null," Note: Make sure to replace the URL (http://localhost:8080/api/emailsend/sendEmailWithResponse) and the JSON payload with your actual values in the code. ",-1),_={class:"q-px-lg q-pb-lg font-text"},g=e("h5",{class:"font-title2"},"Send email with response",-1),y=e("p",null," Inside the sendEmailWithResponse function, a JSON object is created with the provided parameters, including an additional ID. ",-1),C=e("p",null," Note: Make sure to replace the URL (http://localhost:8080/api/emailsend/sendEmailWithResponse) and the JSON payload with your actual values in the code. ",-1),U=r({__name:"SendWithJava",setup(v){const s=`import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;

public class Main {
    public static void main(String[] args) {
        try {
            // Create the URL object for the API endpoint
            URL url = new URL("https://`+window.location.host+`/api/emailsend/sendEmail");

            // Open a connection to the URL
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();

            // Set the request method to POST
            connection.setRequestMethod("POST");

            // Set the content type of the request to JSON
            connection.setRequestProperty("Content-Type", "application/json");

            // Enable input and output streams for the connection
            connection.setDoInput(true);
            connection.setDoOutput(true);

            // Construct the JSON payload for the request
            String jsonPayload = "{\\"templateId\\":\\"2e29cb92-313b-4b7a-8132-3ab4b08f3f46\\", \\"reply_to\\":[\\"info@hiwe-it.com\\"], \\"subject\\":\\"Mail send from Java\\", \\"fromName\\":\\"Custom From Name\\", \\"nameVariable\\":\\"Tester\\", \\"body\\":\\"Hello Java!\\"}";

            // Get the output stream of the connection and write the JSON payload to it
            OutputStream outputStream = connection.getOutputStream();
            outputStream.write(jsonPayload.getBytes(StandardCharsets.UTF_8));
            outputStream.flush();
            outputStream.close();

            // Get the response code from the connection
            int responseCode = connection.getResponseCode();

            // Read the response from the connection
            BufferedReader reader = new BufferedReader(new InputStreamReader(connection.getInputStream()));
            String line;
            StringBuilder response = new StringBuilder();
            while ((line = reader.readLine()) != null) {
                response.append(line);
            }
            reader.close();

            // Print the response code and response body
            System.out.println("Response Code: " + responseCode);
            System.out.println("Response: " + response.toString());

            // Disconnect the connection
            connection.disconnect();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}`,i=`import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;

public class Main {
    public static void main(String[] args) {
        try {
            // Create the URL object for the API endpoint
            URL url = new URL("https://`+window.location.host+`/api/emailsend/sendEmailWithResponse");

            // Open a connection to the URL
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();

            // Set the request method to POST
            connection.setRequestMethod("POST");

            // Set the content type of the request to JSON
            connection.setRequestProperty("Content-Type", "application/json");

            // Enable input and output streams for the connection
            connection.setDoInput(true);
            connection.setDoOutput(true);

            // Construct the JSON payload for the request
            String jsonPayload = "{\\"id\\":\\"1\\",\\"templateId\\":\\"2e29cb92-313b-4b7a-8132-3ab4b08f3f46\\", \\"reply_to\\":[\\"info@hiwe-it.com\\"], \\"subject\\":\\"Mail send from Java\\", \\"fromName\\":\\"Custom From Name\\", \\"nameVariable\\":\\"Tester\\", \\"body\\":\\"Hello Java!\\"}";

            // Get the output stream of the connection and write the JSON payload to it
            OutputStream outputStream = connection.getOutputStream();
            outputStream.write(jsonPayload.getBytes(StandardCharsets.UTF_8));
            outputStream.flush();
            outputStream.close();

            // Get the response code from the connection
            int responseCode = connection.getResponseCode();

            // Read the response from the connection
            BufferedReader reader = new BufferedReader(new InputStreamReader(connection.getInputStream()));
            String line;
            StringBuilder response = new StringBuilder();
            while ((line = reader.readLine()) != null) {
                response.append(line);
            }
            reader.close();

            // Print the response code and response body
            System.out.println("Response Code: " + responseCode);
            System.out.println("Response: " + response.toString());

            // Disconnect the connection
            connection.disconnect();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}`;return(O,b)=>(c(),p("div",d,[e("div",l,[u,e("div",h,[m,S,f,R,a(t(n),{code:s,lang:"java",highlightjs:"",theme:t(o)},null,8,["theme"])]),e("div",_,[g,y,C,a(t(n),{code:i,lang:"java",highlightjs:"",theme:t(o)},null,8,["theme"])])])]))}});export{U as default};
