function easyHTTP(){
    this.http = new XMLHttpRequest();
}

// GET Method - Making an HTTP GET Request
easyHTTP.prototype.get = function(url,callback){
    this.http.open('GET',url,true);

    let self = this;
    this.http.onload = function(){
        if(self.http.status === 200){
            callback(null,self.http.responseText)
        }
        else{
            callback('Error: ' + self.http.status)
        }
    }

    this.http.send()
}

// POST Method - Making an HTTP POST Request

// PUT Method - Making an HTTP PUT Request

// DELETE Method - Making an HTTP DELETE Request