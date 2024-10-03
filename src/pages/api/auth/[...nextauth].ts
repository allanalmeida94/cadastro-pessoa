import User from "@/models/User";
import connect from "@/utils/database/db";
import bcrypt from 'bcryptjs';
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {

  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "email@example.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {

        try {
          await connect();
          const user = await User.findOne({email: credentials?.email})

          if (user) {
            const validPassword = await bcrypt.compare(
              credentials?.password as string,
              user.password
            )

            if (validPassword) {
              return user;
            } else {
              throw new Error("Credenciais inválidas!");
            }

          } else {
            throw new Error("Credenciais inválidas!");
          }
        } catch (error) {
          throw new Error(error as string)
        }
      }
    })
  ],
  pages: {
    error: "/login",
    signIn: "/login",
    signOut: "/"
  }
}
export default NextAuth(authOptions)
