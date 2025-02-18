// To run this go to tsconfig.json and change "target": "es<version-you-had>" to "ESNext"
const getResource = async () => {
  return {
    db: {
      getOneUser: async () => {
        return {
          id: 1,
        }
      },
      // close: async () => {
      //   // Close the database
      // },
      [Symbol.asyncDispose]: async () => {
        // Close the database
      }
    }
  }
}

// const main = async () => {
//   const resource = await getResource()

//   try {
//     const user = await resource.db.getOneUser()
//   } catch (e) {
//     console.error(e)
//   } finally {
//     await resource.db.close()
//   }
// }

const main = async () => {
  await using resource = await getResource()

  try {
    const user = await resource.db.getOneUser()
  } catch (e) {
    console.error(e)
  } finally {
    await resource.db.close()
  }
}