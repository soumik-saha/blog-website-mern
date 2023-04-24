/* eslint-disable jsx-a11y/anchor-is-valid */

export default function Post() {
    return (
        <div className="post">
            <div className="image">
                <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202304/african_cheetah-sixteen_nine.jpeg?VersionId=Vz7xCT.qo1JBVC4ZA6hX1cUoPD1V_.EO&size=690:388" alt="" />
            </div>
            <div className='texts'>
                <h2>Male cheetah from South Africa dies</h2>
                <p className="info">
                    <a href="#" className="author">Soumik Saha</a>
                    <time>2023-04-24 00:07</time>
                </p>
                <p className='summary'>A second cheetah death was reported in Madhya Pradesh’s Kuno National Park on Sunday. The reason for the death is yet to be ascertained.</p>
            </div>
        </div>
    );
};