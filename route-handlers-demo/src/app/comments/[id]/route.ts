import { comments } from "../data";

export async function GET(
    _request: Request,
    { params }: { params: Promise<{ id: string }> }) {
        const {id} = await params;
        const comment = comments.find((comment) => comment.id === parseInt(id));
        return Response.json(comment);
}

export async function PATCH(
    request: Request,
    { params }: { params: Promise<{ id: string }> }) {
        const {id} = await params;
        const body = await request.json();
        const index = comments.findIndex((comment) => comment.id === parseInt(id));
        const {text} = body;
        comments[index].text = text;
        return Response.json(comments[index]);
}

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }) {
        const {id} = await params;
        const index = comments.findIndex((comment) => comment.id === parseInt(id));
        const deleteComment = comments[index];
        comments.splice(index, 1);
        return Response.json(deleteComment);
}