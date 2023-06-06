import axios from "axios"

export const getData=async ()=>{
    const data=await axios("https://dummyjson.com/products")
    if(data) return data
}

// Getting avatar from name
export const customAvatar = (fullName:string) => {
    const initials = fullName
      ?.split(" ")
      .map((name) => name[0])
      .join("")
      .toUpperCase();
    return initials?.slice(0, 2);
};


