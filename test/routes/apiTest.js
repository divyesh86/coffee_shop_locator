let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../server');
let should = chai.should();

chai.use(chaiHttp);


// describe('/create', () => {
//     it('it should create a new coffee shop', (done) => {
//         let newCoffeeShop = {
//             "name": "New Coffee",
//             "address":"986 Market St",
//             "latitude":"37.782394430549445",
//             "longitude": "-122.40997343121123"
//         };
//         chai.request(server)
//             .post('/create')
//             .send(newCoffeeShop)
//             .end((err, res) => {
//                 res.should.have.status(200);
//                 res.body.should.be.a('array');
//                 res.body.length.should.be.eql(0);
//                 done();
//             });
//     });
// });
//
// describe('/read', () => {
//     it('it should return corresponding coffee shop', (done) => {
//         chai.request(server)
//             .get('/read/2')
//             .end((err, res) => {
//                 res.should.have.status(200);
//                 res.body.should.be.a('object');
//                 res.body.should.have.property('errors');
//                 res.body.errors.should.have.property('pages');
//                 res.body.errors.pages.should.have.property('kind').eql('required');
//                 done();
//             });
//     });
// });
//
//
// describe('/update', () => {
//     it('it should update a coffee shop', (done) => {
//         let updatedCoffeeShop = {
//             "name": "Updated Coffee Shop",
//             "address":"986 Market St",
//             "latitude":"37.782394430549445",
//             "longitude": "-122.40997343121123"
//
//         }
//         chai.request(server)
//             .post('/updated/3')
//             .send(updatedCoffeeShop)
//             .end((err, res) => {
//                 res.should.have.status(200);
//                 res.body.should.be.a('array');
//                 res.body.length.should.be.eql(0);
//                 done();
//             });
//     });
// });
//
//
// describe('/delete', () => {
//     it('it should update a coffee shop', (done) => {
//         chai.request(server)
//             .delete('/:4')
//             .end((err, res) => {
//                 res.should.have.status(200);
//                 res.body.should.be.a('array');
//                 res.body.length.should.be.eql(0);
//                 done();
//             });
//     });
// });
//
//
// describe('/findNearest', () => {
//     it('it should update a coffee shop', (done) => {
//         let address = '235 Mission street';
//         chai.request(server)
//             .post('/findNearest')
//             .send(address)
//             .end((err, res) => {
//                 res.should.have.status(200);
//                 res.body.should.be.a('array');
//                 res.body.length.should.be.eql(0);
//                 done();
//             });
//     });
// });
//
//
//
//
//
