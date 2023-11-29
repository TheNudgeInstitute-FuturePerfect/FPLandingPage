const getReviewElement = (googleReviewURL, profilepicURL, profileName, profileReviewText) => {
    return `<div clas="reviewer-data" style="display: flex; padding-bottom: 5px;">
                <div class="reviewer-pic"><a
                        href="${googleReviewURL}" target="_blank">
                        <img loading="lazy" width="50" height="50"
                            src="${profilepicURL}"
                            alt="Post image"></a>
                </div>
                <div class="reviewer-name">
                    <a href="${googleReviewURL}" target="_blank"
                        title="${profileName}"><strong>${profileName}</strong></a>
                </div>
            </div>
            <div class="stars">
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
            </div>
            <div class="review-text">
                <p>
                    ${profileReviewText}
                </p>
            </div>
            <div class="view-google-review">
                <img src="google_icon.png" />
                <a href="${googleReviewURL}"
                    target="_blank" title="View on Google Maps">View on Google</a>
            </div>`
}

window.onload = () => {
    let button = document.getElementById('loadmorebutton');
    let count  = 0;
    let reviews = [
        {
            googleReviewURL: 'https://www.google.com/maps/contrib/110225868084345190810/reviews/',
            profilepicURL: 'https://lh3.googleusercontent.com/a-/ALV-UjVs26WEBbR4FYrqPzjWlCHjUvxRowKt3VuDmH87iu-tfzk=w75-h75-p-rp-mo-br100',
            profileName: 'Prashant Hiremath',
            profileReviewText: `Hi good evening, I am ex student of Nudge institute, The trainer is really good and explained to me many real-time examples. The institution is very good in teaching and also good for studying. I will surely recommend this institute if u want to improve your personal skills and knowledge.`
        },
        {
            googleReviewURL: 'https://www.google.com/maps/contrib/118209305751744083741/reviews/',
            profilepicURL: 'https://lh3.googleusercontent.com/a/ACg8ocLlk9ce9t-FQhy23h0cOE3C2DljISZFL_vERnuuceXa=w45-h45-p-rp-mo-br100',
            profileName: 'shubha Patgar',
            profileReviewText: `The nudge or future perfect class is helped me to improve my communication skills and listening skills. Most important thing from this class is my confidence level increased. It is useful to built my career development in future days. This class is increased my knowledge and values. This platform is best for learning English and trainer also support and motivated students. I would like heartily thankful to my trainer Neetu mam.`
        },
        {
            googleReviewURL : 'https://www.google.com/maps/contrib/111395678770083757000/reviews/',
            profilepicURL : 'https://lh3.googleusercontent.com/a/ACg8ocJqxNYU4OwIh5gKHXtYOdGwXAi2OktCRUVAJcxaIcHz=w75-h75-p-rp-mo-br100',
            profileName : 'Aravinthraj R',
            profileReviewText : `I had a great experience with the teaching provided by future perfect. The trainer clear and engaging teaching style made it easy to grasp complex concepts. The use of multimedia resources, interactive quizzes, and discussion forums enhanced my learning. Moreover, the trainer was always responsive to questions and provided timely feedback on assignments. Overall, I found the  highly effective, convenient, and a valuable learning experience.`
        },
        {
            googleReviewURL : 'https://www.google.com/maps/contrib/112382113916009838975/reviews/',
            profilepicURL : 'https://lh3.googleusercontent.com/a-/ALV-UjXSxp1O8PjwMyDNH8A927ZOZl9L0Ei9cjvKx8sO6mX7sRc=w75-h75-p-rp-mo-br100',
            profileName : 'ME mercy ebe',
            profileReviewText : `Future perfect class is really helpful to learn English communication skill and I developed my basic level into intermediate level. I would like to hearty thankful to my trainer SARANYA mam.`
        },
        {
            googleReviewURL : 'https://www.google.com/maps/contrib/104909134745914518780/reviews/',
            profilepicURL : 'https://lh3.googleusercontent.com/a-/ALV-UjXhcmDFEkslK5-eo2Ot_FbbaRnrDRkACW1BWgZFyt2cynw=w75-h75-p-rp-mo-br100',
            profileName : 'priya jes',
            profileReviewText : `Future perfect is really a great platform for improving my communication skills.when I enrolled into this course my trainer was mrs.saranya mam. She is a wonderful person. I quickly my english during the online section.it was a lot of fun the whole time and now I will be confident talking to others. Thank you future perfect and thanks to mrs.saranya mam`
        },
        {
            googleReviewURL : 'https://www.google.com/maps/contrib/106623783881253508221/reviews/',
            profilepicURL : 'https://lh3.googleusercontent.com/a/ACg8ocJ5nUZUsBdP-PcO-z41ikTg9BnP5HluRJmd_tcbzWI0=w75-h75-p-rp-mo-br100',
            profileName : 'Raihana Banu',
            profileReviewText : `It's really awesome platform to gain more and more knowledge. This platform made me a pleasing girl.Then the trainer's way of teaching and her kindness made us being attention in class.`
        },
        {
            googleReviewURL : 'https://www.google.com/maps/contrib/115526026695232795868/reviews/',
            profilepicURL : 'https://lh3.googleusercontent.com/a/ACg8ocK4qtsGHMMNz3_i-VaJXk2lTh7fL0FH_Q05yQ91ZGgq=w45-h45-p-rp-mo-br100',
            profileName : 'Madhu Mala',
            profileReviewText : `Hello everyone ,I learnt so many things from FP,  after that my confidence level improved .without fear or any hesitation I can speak .I want to join higher level speaking course  pls give me a chance`
        },
        {
            googleReviewURL : 'https://www.google.com/maps/contrib/110526290927469852971/reviews/',
            profilepicURL : 'https://lh3.googleusercontent.com/a/ACg8ocIda9yRJcLEB7zPUwc0GJzdJ-pqB03PH5MdfmX8GpLi=w45-h45-p-rp-mo-br100',
            profileName : 'NEKAMIYA T',
            profileReviewText : `Future perfect trainer and training also very good and very supportive for my work place in speaking other work to confidence create in my life ... thankyou so much ...and keep rocking`
        },
        {
            googleReviewURL : 'https://www.google.com/maps/contrib/105286021525387303449/reviews/',
            profilepicURL : 'https://lh3.googleusercontent.com/a/ACg8ocJduYOvSXW5RQGeoNYKaBLxw9i2GmIXuaDCLLoTSkxP=w75-h75-p-rp-mo-br100',
            profileName : 'Kavitha P B',
            profileReviewText : `The future perfect program was really good, its very useful for my career, we learned so many things in that. Thanks to my trainer Hemalatha ma'am... We enjoyed the class. Thankyou nudge team🙏🏻`
        },
        
    ]
    button.onclick = async () => {
        if(count < reviews.length) {
            let reviewElement1 = getReviewElement(reviews[count + 0].googleReviewURL, reviews[count + 0].profilepicURL, reviews[count + 0].profileName, reviews[count + 0].profileReviewText);
            let reviewElement2 = getReviewElement(reviews[count + 1].googleReviewURL, reviews[count + 1].profilepicURL, reviews[count + 1].profileName, reviews[count + 1].profileReviewText);
            let reviewElement3 = getReviewElement(reviews[count + 2].googleReviewURL, reviews[count + 2].profilepicURL, reviews[count + 2].profileName, reviews[count + 2].profileReviewText);

            let newDiv1 = document.createElement('div');
            let newDiv2 = document.createElement('div');
            let newDiv3 = document.createElement('div');

            newDiv1.className = 'card';
            newDiv2.className = 'card';
            newDiv3.className = 'card';

            newDiv1.innerHTML = reviewElement1;
            newDiv2.innerHTML = reviewElement2;
            newDiv3.innerHTML = reviewElement3;

            document.getElementById('first').appendChild(newDiv1);
            document.getElementById('second').appendChild(newDiv2);
            document.getElementById('third').appendChild(newDiv3);
            count += 3;
            if(count >= reviews.length) {
                button.style.display = 'none';
            }
        }
    }
}