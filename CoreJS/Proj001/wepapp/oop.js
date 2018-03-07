var E = function(subClass,superClass){
    subClass.prototype = Object.create(superClass.prototype);
  };
  
  
  var Robo = (function(){
    
    function Robo(config){
      this.mainConfig = config;
      this.shout = function(){
        alert('ok');
      };
    }
    Robo.prototype.showBasicConfig = function(){
      alert(JSON.stringify({id:109990999.2327123}));
    }
    
    return Robo;
    
  })();
  
  
  
  var HomeRobo = (function(){
    
    function HomeRobo(config){
      Robo.call(this,config);
    }
    E(HomeRobo,Robo);
    HomeRobo.prototype.makeSound = function(){
      alert('Your Home is great!');
    }; 
    
    return HomeRobo;
    
    
  })();
  
  
  var CRobo = (function(){
    
    function CRobo(config){
     HomeRobo.call(this,config); 
    }
    E(CRobo,HomeRobo);
    
    CRobo.prototype.run = function(){
      alert('Run');
    };
    
    return CRobo;
    
  })();
  
  var crobo = new CRobo({model_number:8989});
  crobo.makeSound();
  crobo.showBasicConfig();
  crobo.shout();
  
  
  