import mongoose from "mongoose";

const catalogSchema = mongoose.Schema({
    description: {
        type: String
    }
});

const Catalog = mongoose.model("Catalog", catalogSchema);

export default Catalog;