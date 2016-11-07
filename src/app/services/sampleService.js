export default class SampleService {
    static get $inject(){ return ['$q', '$http']; }

    constructor($q, $http) { 
        this.q = $q;
        this.http = $http;
    }

    sample () {
        let defer = this.q.defer();
        defer.resolve({ data: 1 });
        return defer.promise;
    }
}
