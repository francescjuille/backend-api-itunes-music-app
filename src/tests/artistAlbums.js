let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../app")

chai.should();

chai.use(chaiHttp);


describe("POST /api/artist-data/get-albums-by-artist-name", () => {
    it("it should get all artist related albuns", (done) => {
        const body = {
            artistName: "The Beatles"
        }

        chai.request(server)
           .post("/api/artist-data/get-albums-by-artist-name")
           .send(body)
           .end((err,response) => {
                response.should.have.status(200);
                response.body.should.be.a('object');
                response.body.should.have.property('data');
                response.body.should.have.nested.property('data.albums').to.have.lengthOf.above(1);
                response.body.should.have.nested.property('data.albums[0].collectionName').to.contain.oneOf(['The Beatles']);
            done();
           })
    });

    it("it should get an 400 error when data is invalid", (done) => {
        const body = {
            incorrectAtribute: "incorrect"
        }
        chai.request(server)
           .post("/api/artist-data/get-albums-by-artist-name")
           .send(body)
           .end((err,response) => {
                response.should.have.status(400);
            done();
           })
    });

})