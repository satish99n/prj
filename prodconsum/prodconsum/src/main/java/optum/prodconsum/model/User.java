package optum.prodconsum.model;

public class User {
	
	private int uId;
	private String uName;
	private int phnNum;
	private String address;
	
	
	public User(int uId, String uName,int phnNum, String address) {
		this.uId = uId;
		this.uName = uName;
		this.phnNum = phnNum;
		this.address = address; 
	}
	
	
	public int getPhnNum() {
		return phnNum;
	}


	public void setPhnNum(int phnNum) {
		this.phnNum = phnNum;
	}


	public String getAddress() {
		return address;
	}


	public void setAddress(String address) {
		this.address = address;
	}


	public int getuId() {
		return uId;
	}
	public void setuId(int uId) {
		this.uId = uId;
	}
	public String getuName() {
		return uName;
	}
	public void setuName(String uName) {
		this.uName = uName;
	}
}
