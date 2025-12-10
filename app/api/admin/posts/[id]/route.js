import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Post from "@/models/Post";
import mongoose from "mongoose";

async function findPostByIdOrSlug(idOrSlug) {
  if (!idOrSlug) return null;

  let post = null;

  if (mongoose.isValidObjectId(idOrSlug)) {
    console.log("API_GET_POST: treating as ObjectId:", idOrSlug);
    post = await Post.findById(idOrSlug);
    if (post) return post;
  }

  console.log("API_GET_POST: trying as slug:", idOrSlug);
  post = await Post.findOne({ slug: idOrSlug });
  return post;
}

// GET /api/admin/posts/:id
export async function GET(_req, ctx) {
  try {
    await connectDB();

    const { id } = await ctx.params; // 👈 لازم await هنا
    console.log("API_GET_POST id:", id);

    const post = await findPostByIdOrSlug(id);

    if (!post) {
      console.log("API_GET_POST: NO POST FOUND for:", id);
      return NextResponse.json(
        { error: "لم يتم العثور على المقال" },
        { status: 404 }
      );
    }

    console.log("API_GET_POST: FOUND post _id:", post._id.toString());

    return NextResponse.json({ post }, { status: 200 });
  } catch (err) {
    console.error("ADMIN_POST_GET_ERROR:", err);
    return NextResponse.json(
      { error: "خطأ أثناء جلب المقال" },
      { status: 500 }
    );
  }
}

// PUT /api/admin/posts/:id
export async function PUT(req, ctx) {
  try {
    await connectDB();

    const { id } = await ctx.params; // 👈 برضه هنا
    console.log("API_PUT_POST id:", id);

    let post = await findPostByIdOrSlug(id);

    if (!post) {
      return NextResponse.json(
        { error: "لم يتم العثور على المقال" },
        { status: 404 }
      );
    }

    const body = await req.json();
    const {
      title,
      slug,
      content,
      status,
      category,
      tags,
      excerpt,
      coverImage,
      readTime,
    } = body;

    if (title !== undefined) post.title = title;
    if (slug !== undefined) post.slug = slug;
    if (content !== undefined) post.content = content;
    if (category !== undefined) post.category = category;
    if (excerpt !== undefined) post.excerpt = excerpt;
    if (Array.isArray(tags)) post.tags = tags;
    if (coverImage !== undefined) post.coverImage = coverImage;
    if (readTime !== undefined) post.readTime = readTime;

    if (status) {
      post.status = status === "published" ? "published" : "draft";
      if (status === "published" && !post.publishedAt) {
        post.publishedAt = new Date();
      }
    }

    await post.save();

    return NextResponse.json({ post }, { status: 200 });
  } catch (err) {
    console.error("ADMIN_POST_PUT_ERROR:", err);
    return NextResponse.json(
      { error: "خطأ أثناء تعديل المقال" },
      { status: 500 }
    );
  }
}

// DELETE /api/admin/posts/:id
export async function DELETE(_req, ctx) {
  try {
    await connectDB();

    const { id } = await ctx.params; // 👈 وهنا
    console.log("API_DELETE_POST id:", id);

    const post = await findPostByIdOrSlug(id);

    if (!post) {
      return NextResponse.json(
        { error: "لم يتم العثور على المقال" },
        { status: 404 }
      );
    }

    await Post.deleteOne({ _id: post._id });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("ADMIN_POST_DELETE_ERROR:", err);
    return NextResponse.json(
      { error: "خطأ أثناء حذف المقال" },
      { status: 500 }
    );
  }
}
