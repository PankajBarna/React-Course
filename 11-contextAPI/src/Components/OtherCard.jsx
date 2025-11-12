export default function OtherCard(){
    return(
        <div className="flex gap-6 p-3 m-h-screen border-2 max-w-xl rounded-2xl items-start bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100">
        <img
          className="rounded-xl"
          src="https://images.unsplash.com/photo-1541410965313-d53b3c16ef17?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fFRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=200"
          alt=""
        />
        <div className="content-start h-full justify-start">
          <h2 className="text-2xl">Off the beat</h2>
          <p className="flex-wrap">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repudiandae enim veniam officiis nam maxime aut atque consequatur id
            deleniti. Vero corrupti ut culpa exercitationem nemo natus dicta
            ipsa aspernatur earum.
          </p>
        </div>
      </div> 

    )
}
