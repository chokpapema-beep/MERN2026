import bcrypt from "bcryptjs";

export const hashPassword = async (password) => {
    return await bcrypt.hash(password, 10);
};

export const comparePassword = async (password, hash) => {
    return await bcrypt.compare(password, hash);
};
export const verifyPassword = async ({hashedPassword, plainPassword}) => {
    const result = await bcrypt.compare(plainPassword,hashedPassword);
    return result;
}



// import bcrypt from "bcryptjs";

// export const hashedPassword = async (password) => {

//  const result = await bcrypt.hash(password,10);
//     return result;
// }