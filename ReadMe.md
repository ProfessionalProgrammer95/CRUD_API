# project CRUD API

## MONGO DB Methods


model.findById({id}) => fetch the single data(Object)(GET)
model.findByIdAndUpdate({id},data) => Update the(PATCH/PUT)
model.finByAndDelete({id}) => to delete single data(DELETE)

model.find() => to read all objects(GET)

model.create(data) => to create or save data into database(POST)
if we create instance to model
let newInst = new Model(data)
newInst.save();

model.findOne({anyfield: value}) => fetch the single data (GET)
model.findOneAndUpdate({anyField:value},data) => to update (PATCH / PUT)
model.findOneAndDelete({anyfield: value}) => to delete(DELETE)