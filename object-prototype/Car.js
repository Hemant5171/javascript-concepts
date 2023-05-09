(function(global, $){
    var Car=function(modelName, manufacturingYear,chassisNumber){
        return new Car.init(modelName,manufacturingYear,chassisNumber);
    }

    Car.prototype={};

    Car.init=function(modelName,manufacturingYear,chassisNumber){
        var self=this;
        self.modelName=modelName || '';
        self.manufacturingYear=manufacturingYear || '1960-01-01';
        self.chassisNumber=chassisNumber || '0000000';
    }
    Car.init.prototype=Car.prototype;

    global.Car=global.C$=Car;


}(window, jQuery));