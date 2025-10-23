export const ChameModel = {
  getFullName() {
    const fullName = process.env.FULL_NAME || "Ángel de Jesús Chame Vera";
    return { fullName };
  },
};
