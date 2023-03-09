// See http://mongoosejs.com/docs/models.html
    // for more of what you can do here.
    module.exports = function (app) {
        const modelName = 'tourpackages';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          // ~cb-read-start~
          {
       image: { type: String },
       packageName: { type: String, required: true },
       packageDuration: { type: String },
       packagePrice: { type: Number },
       validDate: { type: Date, required: false },
       location: { type: String },
       ratings: { type: Number },
       description: { type: String },
       remark: { type: String },
       contactinfo: { type: Number, required: false },
       isAvailable: { type: Boolean, required: true },
       isBooked: { type: Boolean },
       activityinfo: { type: Schema.Types.ObjectId },

    }
          // ~cb-read-end~
          , 
          {
          timestamps: true
        });
      
        // This is necessary to avoid model compilation errors in watch mode
        // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
        if (mongooseClient.modelNames().includes(modelName)) {
          mongooseClient.deleteModel(modelName);
        }
        return mongooseClient.model(modelName, schema);
        
      };