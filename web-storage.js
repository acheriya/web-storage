var Storage = function() {
  this.firstName = "";
}

Storage.prototype.create = function(name, data) {  
    if (localStorage.getItem(name) === null) {
        localStorage.setItem(name, JSON.stringify(data) || "");
    }
}

Storage.prototype.drop = function(name)
{
    if (localStorage.getItem(name) != null) 
        localStorage.removeItem(name)
}

Storage.prototype.get = function(name) {

    var item = localStorage.getItem(name);

    if (item != null) 
    	return JSON.parse(item);
}



