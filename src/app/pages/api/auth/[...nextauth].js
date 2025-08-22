import NextAuth from "next-auth";

import bcrypt from "bcryptjs";
import clientPromise from "@/lib/mongodb";
import Credentials from "next-auth/providers/credentials";


export default NextAuth({
  session: { strategy: "jwt" },
  pages: { signIn: "/login" },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: { email: {}, password: {} },
      authorize: async (credentials) => {
        const db = (await clientPromise).db();
        const user = await db.collection("users").findOne({ email: Credentials.email });
        if (!user) throw new Error("No user with this email");
        const ok = await bcrypt.compare(credentials.password, user.passwordHash);
        if (!ok) throw new Error("Invalid password");
        return { id: String(user._id), name: user.name, email: user.email };
      },
    }),
  ],
});
