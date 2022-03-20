import React from 'react'
import '../Newcss/Contact1.css'

export default function(){
  return(
    <div>
      <div>
            <div className="container">
                <div className='head'>
                    <h1>CONTACT</h1>
                </div>
               

                <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://images.unsplash.com/photo-1635350736475-c8cef4b21906?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://media.istockphoto.com/photos/need-everyone-to-give-me-their-best-ideas-picture-id863497498" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>



                
                <h1 className='ask'>What you get when asking a question</h1>
                <div class="accordion" id="accordionExample">
  <div class="accordion-item p-5">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <h2>Partnership Enquiries</h2>
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <h3>This is the first item's accordion body.</h3> <h3>It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.</h3>
      </div>
    </div>
  </div>
  <div class="accordion-item p-5">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <h2>Media Enquiries</h2>
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <h3>This is the first item's accordion body.</h3> <h3>It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.</h3>
      </div>
    </div>
  </div>
  <div class="accordion-item p-5">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <h2>Partnership Enquiries</h2>
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <h3>This is the first item's accordion body.</h3> <h3>It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.</h3>
      </div>
    </div>
  </div>
</div>
                <div className='bottom'>
    <h2 className='top-bar'>Send us a Message</h2>
    <div className='content'>
    <div className="name">
       <label className='nl' htmlFor="">Name:<input type="text" className='nt' name="" id="" /></label>
    </div>
    {/* SURNAME */}
    <div className="surname">
      <label className='sl' htmlFor="">Surname:<input type="text" className='st' name="" id="" /></label>
    </div>
    {/* EMAIL */}
    <div className="email">
        <label className='el' htmlFor="">EmailID:<input type="text" className='et' name="" id="" /></label> 
    </div>
    {/* PHONE */}
    <div className="phone">
      <label className='pl' htmlFor="">Phone:<input type='text' className='pt' name="" id="" /></label>  
    </div>
    {/* MESSAGE */}
    <div className="message">
        <label className='ml' htmlFor="">Message:<input type="text" name="" id="" className='mt' /></label>
    </div>
    <button className='btn btn-primary msg'>SEND MESSAGE</button>
    </div>
    <div className="contactus">
      <h2>Contact Us</h2>
      <h3 className='txt'>We are open for any suggestion or just have a chat.</h3>
      <div className="lastcontent">
      
      <div className="address d-flex">
      <img src="data:image/png;base64,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"/>
      <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores sint magni similique suscipit eum, magnam ab aliquid blanditiis sequi fuga.</h3>
      </div>
      <div className="phone1 d-flex">
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAFBklEQVRoge2ZbWxTZRTH/+feu65la8u2bi3dnC4jAlm0myxbuynExAgaETVkJhoHGGAJMSRKJEYMQpT4hsIHZsIMISMLMVUT0Q9LNAQjWbvC2Au6BBKCicm6OTaFzW2sae/xA+u8K/f23sEtvmS/T+05p+f+/31un+e5T4EFFljgPw0ZrgwGxSVjk/UArSdgHRgeAu0b2Nr4cQb16ZLWwH2nT1tjl39dA2A9gHUAXCklLLNcO7Rt87lMCdRD0kr4w31Py8yHhm0jZbGpSa0yEkg4AGB1RtQZQFAL1oZ69zDzSQLKcvNTv/RbWFXc0vqU+dKMoWoAwM7ki0XOxRCzstI2YcL7CAZFM4UZRcMADcy+IkJufoFenwrv2NRm82QZR8OA3Kx8l5vnAglagzUDY5/7+PEcs4QZRVVV3JI4BvDobJEoIjdPdxS80jS/ZqY4I6gaOF9dPQnQp8qYw+WGoDMKDLye39bmMFGfLpqKRKbDAG7MFkoi7K4ivX526wQvNUmbITQNhOp9wwBalTF7QSEkiyVNO+6ODpZcMEucEdLeEwLwDoDZVYwEAYs9xVrlXZAta7D30biJ+nRJayBcVzlAzIeUMZvdAZvDmVLJZ6zyjceiTS+MmK5QB525EWBx+gMAg8pY3pISCNLMusX4DvL02itNTdczolAHXQMRv3+MCK8qY6IkId9bCgCjMTG+IdrUpLlZyjSGt9M1od52AtYqY9eGolcuPfdkufmyjKM7AklEYAuAP5Qxp9tTWhP5qdp0VfPAsIFwXeUAGDuUMSJBQiL+eU0kortMZwrDBgAgUl/ZRqATyhiBypGwflXR359ugcgY8zIAAJM52AagXxkj8Gr79XgLmI0/oprEvA1c8PkmBAgbAMyZNhm8sbaz7yPTlBlk3gYAIFz34EUifgZAbE6CsbM21LvHDGFGuaMh93f0bGWiltQ4E+09G/DtM9Jj5ZEjWUNkqcjm2C+3sxje8T3rD/fsZqZ3VRof7gz4doCItT5b3NpawDF8D6AKwDgxfxi3Cgd/a2ycMHp9U350taHe9wC8cWtzah13Stv6Kypiqbn8tjaHdSpxCkDqOnKVGfsHo6XNRjaGps0a/o6evUz0tkqqwxKXnz2z6qGryUDJJ0Eb26faOf1xzEUi2jOwpfGLdNc1ddqrCfe9Scz7VVKX40TPnw/4ul1Hj9otCelLEB430pNBPzAndmkdnpk+b8/8sJsBzDmLYZbjY8OD0bGRETuAvHm2ZRDvim7ZdCA1cVvTaDo666s+k0FPALimjBMJktNdXOq65948UdQ8ENSCwMJbagnTDQDAuTrfqYRMfgJ+Ts3ZHIvhXroMNvs8n/2Jh9XCGTEAAF0P+y5N5pAfhLbUnChJcJWWwVVapvOM/TcMfKsWz5gB4Oa2IxKofInBLyLllgJuPp56ypfDWeTRPbIBC1+rhTNqIMnZuqoTEOgBgNtTcyQQHIVueO5fAXtBIUhQnVeuDjqzQ2qJu7579Id7G5hxEIBXLZ+Ix/Hn7yMYHx0By4lk+Fh068aX1ervyggo6QxUBiXZupyZ9kNxZJNElCQ4izzwLluBPG8JsrKtAHBSq99dHwElgVBvcYJ5NxFtAmBTq2GmKxMDl1b0NzTcsh0B/mEDSR75sbswJgmvgLEdNPdvLCJa3xnwfaP12X+FgSQru7oWSTFxM0DbAXiJ+EBnoEpta7LAAgv8X/gLaa9vNnZGtT4AAAAASUVORK5CYII="/>
      <h3>123456789012</h3>
      </div>
      <div className="email2 d-flex">
      <img src="data:image/png;base64,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"/>
<h3>wendy123@gmail.com</h3>
      </div>
      </div>
     
    </div>
        </div>
        
            </div>
            </div>
    </div>
  )
}
