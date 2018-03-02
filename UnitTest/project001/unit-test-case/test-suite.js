describe("Major test for Person function",()=>{

    var testPerson;

    beforeEach(()=>{
        testPerson = new Person();
    });

    it('Person must be an Object',()=>{
        expect(typeof testPerson).toEqual('object');
    });

    it('Person must be an Object with some public properties',()=>{
        expect(Object.keys(testPerson).length).toBeGreaterThan(0);
    });

    it('Person Configuration check for :doj',()=>{
        expect(Object.keys(testPerson.getCurrentConfigObject())).toContain('doj');        
    });

    it('Person Configuration check for :dor',()=>{
        expect(Object.keys(testPerson.getCurrentConfigObject())).toContain('dor');
    });
    
    it('Person dor must be Date Object',()=>{
        let config = testPerson.getCurrentConfigObject()
        expect(config.dor instanceof Date).toBe(true);
    });

    it('configurePersonObject must be called when getCurrentConfigObject invoked',()=>{
        spyOn(testPerson,'configurePersonObject');
        testPerson.getCurrentConfigObject();
        expect(testPerson.configurePersonObject).toHaveBeenCalled();
    });

    it('Config must be defined',()=>{
        expect(testPerson.config).toBeTruthy();
    });

    it('Parent must not be defined',()=>{
        expect(testPerson.parent).toBeFalsy();
    });

});


describe("Major test2 for Person function",()=>{

    it('Numeric',()=>{
        expect(10).toBeTruthy();
    });

});


(function () {
    var jasmineEnv = jasmine.getEnv();
    jasmineEnv.updateInterval = 1000;

    var htmlReporter = new jasmine.HtmlReporter();

    jasmineEnv.addReporter(htmlReporter);

    jasmineEnv.specFilter = function (spec) {
        return htmlReporter.specFilter(spec);
    };

    var currentWindowOnload = window.onload;

    window.onload = function () {
        if (currentWindowOnload) {
            currentWindowOnload();
        }
        execJasmine();
    };

    function execJasmine() {
        jasmineEnv.execute();
    }

})();