export default {
    multipleMongooseToObject(mongooseArrays) {
        return mongooseArrays.map(mongoose => mongoose.toObject());
    },
    mongooseToObject(mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    }
}