import * as mongoose from "mongoose";

interface IArticle{
    title: string;
    subtitle: string;
    content: string;
    created?: number;
    updated?: number;
    author: string;
}

interface IArticleModel extends IArticle, mongoose.Document{};
var articleSchema = new mongoose.Schema({
    title: String,
    subtitle: String,
    content: String,
    created: Date,
    updated: Date,
    author: String
})
.pre('save', function(next) {
    if (!this.created) {
      this.created = new Date().getTime();
    }
    this.updated = new Date().getTime();
    next();
});

var ArticleModel = mongoose.model<IArticleModel>("Article", articleSchema);

export { ArticleModel, IArticle} ;