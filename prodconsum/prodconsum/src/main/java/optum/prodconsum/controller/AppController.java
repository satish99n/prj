package optum.prodconsum.controller;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import optum.prodconsum.model.User;

@RestController
@RequestMapping("/")
public class AppController {

	@RequestMapping(value = "/getuser",method = RequestMethod.GET)
	public ResponseEntity<User> home()
	{
		User u = new User(1,"aa",123,"Hyd");
		return new ResponseEntity<User>(u,HttpStatus.OK);
	}
	
	@RequestMapping(value= "/createuser",method = RequestMethod.POST)
	public ResponseEntity<?> createUser(@RequestBody User user, UriComponentsBuilder ucBuilder)
	{
		
	System.out.println(user.getuId() + "name :"+user.getuName());
	 HttpHeaders headers = new HttpHeaders();
     headers.setLocation(ucBuilder.path("/api/user/{id}").buildAndExpand(user.getuId()).toUri());
     return new ResponseEntity<String>(headers, HttpStatus.CREATED);
	
	}
	
	@RequestMapping(value= "/createuserwithcli",method = RequestMethod.POST,produces = { MediaType.APPLICATION_JSON_VALUE, //
            MediaType.APPLICATION_XML_VALUE })
	@ResponseBody
	public User createUserWithCli(@RequestBody User user, UriComponentsBuilder ucBuilder)
	{
		User local = user;

		return local;
	
	}
}

