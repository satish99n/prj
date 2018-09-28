package optum.prodconsum.RestClient;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.web.client.RestTemplate;

import optum.prodconsum.model.User;

public class ClientUI {

	static final String create_user = "http://localhost:8080/createuser";
	
	public static void main(String[] args)
	{
		User u = new User(1,"aa",123,"Hyd");
		
		HttpHeaders headers = new HttpHeaders();
		headers.add("Accept", MediaType.APPLICATION_XML_VALUE);
		headers.setContentType(MediaType.APPLICATION_XML);
		
		RestTemplate restTemplate = new RestTemplate();
		HttpEntity<User> entity = new HttpEntity<User>(u,headers);
		
		User user = restTemplate.postForObject(create_user, entity, User.class);
		
		System.out.println(user.getuId()+ "  "+user.getuName()+"  "+user.getPhnNum()+"  "+user.getAddress());
	}
}
