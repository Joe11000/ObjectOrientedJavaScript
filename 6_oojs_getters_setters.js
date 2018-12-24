var address = {
  street: 'No String',
  city: "No City",
  state: "No State",
  get getAddress(){
    return `${this.street}, ${this.city}, ${this.state}`
  },
  set setAddress(theAddress){
    var parts = theAddress.toString().split(', ');
    this.street = parts[0] || '';
    this.city = parts[1] || '';
    this.state = parts[2] || '';
    
  }
}

address.setAddress = '1102 North Damen Ave, Chicago, Illinois'
document.write("Address : " + address.getAddress + '<br />')