/*
WebStorage v1.1.0
(c) 2016-2017 by - Anas KVC. All rights reserved. 
https://exprotocol.com/
*/


var Storage = function(encrptionKey) {
  this.encrptionKey = encrptionKey || null;
}

Storage.prototype.encrypt = function(data) {
    return CryptoJS.AES.encrypt(data, this.encrptionKey).toString();
}

Storage.prototype.decrypt = function(data) {
    return CryptoJS.AES.decrypt(data, this.encrptionKey).toString(CryptoJS.enc.Utf8);
}

Storage.prototype.create = function(name, data) {  
    
    if (localStorage.getItem(name) === null) {

        data = JSON.stringify(data) || "";

        if(this.encrptionKey!= null)
            data = this.encrypt(data);

        localStorage.setItem(name, data);
    }
}


Storage.prototype.drop = function(name)
{
    if (localStorage.getItem(name) != null) 
        localStorage.removeItem(name)
}

Storage.prototype.get = function(name) {

    var data = localStorage.getItem(name);

    if (data != null) 
    {
       if(this.encrptionKey!= null)
            data = this.decrypt(data);

        return JSON.parse(data);
    }
    	
}

Storage.prototype.update = function(name, data) {  
    
    if (localStorage.getItem(name) != null) {

        data = JSON.stringify(data) || "";

        if(this.encrptionKey!= null)
            data = this.encrypt(data);

        localStorage.setItem(name, data);
    }
}



