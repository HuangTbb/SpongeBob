const string = `
.spongeBob{
    background: rgb(250,238,56);
}
.eye{
    position: absolute;
    left: 50%;
    top: 20px;
    margin-left: -60px;
    width: 120px;
    height: 120px;
    border: 5px solid #000;
    background: #fff;
    border-radius: 50%;
    z-index: 5;
}
.leftEye{
    transform: translateX(-60px);
}
.rightEye{
    transform: translateX(60px);
}
.eyeBall{
    width: 56px;
    height: 56px;
    border: 5px solid #000;
    background: rgb(98,198,236);
    border-radius: 50%;
    position: absolute;
    top: 50%;
    margin-top: -28px;
}
.ebLeft{
    right: 10px;
}
.ebRight{
    left: 10px;
}
.pupil{
    background: #000;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    position: absolute;
    top: 11px;
}
.pupilLeft{
    right: 7px;
}
.pupilRight{
    left: 7px;
}
.eyelashes{
    position: absolute;
    left: 50%;
    width: 240px;
    height: 50px;
    margin-left: -120px;
}
.eyelash{
    width: 7px;
    height: 40px;
    position: absolute;
    background: #000;
}
.el1{
    left: 20px;
    top: 8px;
    transform: rotate(-28deg);
}
.el2{
    left: 50px;
}
.el3{
    left: 80px;
    top: 2px;
    transform: rotate(28deg);
}
.el4{
    left: 150px;
    top: 2px;
    transform: rotate(-28deg);
}
.el5{
    left: 180px;
    transform: rotate(-2deg);
}
.el6{
    left: 210px;
    top: 8px;
    transform: rotate(28deg);
}
.nose{
    position: absolute;
    left: 50%;
    margin-left: -22px;
    top: 93px;
    width:44px;
    height: 48px;
    border: 5px solid #000;
    border-bottom: none;
    border-radius: 50% 50% 50% 40% / 40% 40% 60% 60% ;
    background: rgb(250,238,56);
    z-index: 10;
}
.face{
    position: absolute;
    left: 50%;
    top: 108px;
    width:58px;
    height: 58px;
    border: 5px solid rgb(177,87,1);
    background: rgb(250,238,56);
    border-bottom: none;
    border-left: none;
    border-radius:55% 70% 64% 31% / 60% 69% 50% 45%;
    z-index: 5;
}
.leftFace{
    margin-left: -140px;
    transform: rotate(-58deg);
}
.rightFace{
    width:58px;
    height: 58px;
    margin-left: 85px;
    transform: rotate(-32deg);
}
.dot1,
.dot2,
.dot1::before,
.dot1::after,
.dot2::before,
.dot2::after{
    position: absolute;
    background: rgb(177,87,1);
    border-radius:50%;
}
.dot1{
    width: 5px;
    height: 6px;
    top: 4px;
    left: 22px;
}
.dot1::before{
    content: '';
    width: 6px;
    height: 5px;
    top: 11px;
    left: 18px;
}
.dot1::after{
    content: '';
    width: 6px;
    height: 5px;
    top: 14px;
    left: 2px;
}
.dot2{
    width: 7px;
    height: 4px;
    top: 6px;
    left: 30px;
}
.dot2::before{
    content: '';
    width: 6px;
    height: 5px;
    top: 18px;
    left: 14px;
}
.dot2::after{
    content: '';
    width: 6px;
    height: 6px;
    top: 12px;
    left: 2px;
}
.mouth, .mouth .hide{
    position: absolute;
    left: 50%;
    border: 5px solid #000;
    border-top: none;
    border-radius: 50% / 0% 0% 100% 100%;
}
.mouth{
    top: 148px;
    margin-left: -112px;
    width: 224px;
    height: 120px;
    background: rgb(78,16,22);
    z-index: 6;
    overflow: hidden;
}
.mouth .hide{
    top: -154px;
    margin-left: -200px;
    width: 400px;
    height: 190px;
    background: rgb(250,238,56);
    z-index: 7;
}
.mouth .tooth1, .mouth .tooth2{
    position: absolute;
    top: 20px;
    left: 50%;
    width: 40px;
    height: 45px;
    margin-left: -20px;
    border: 5px solid #000;
    background: #fff;
}
.mouth .tooth1{
    transform: translateX(-26px) rotate(6deg);
}
.mouth .tooth2{
    transform: translateX(26px) rotate(-6deg);
}
.smell1, .smell2{
    position: absolute;
    top: 144px;
    left: 50%;
    margin-left: -10px;
    width: 22px;
    height: 15px;
    border-top: 4px solid rgb(78,16,22);
    border-radius: 49% 51% 43% 57% / 47% 41% 59% 53% ;
    z-index: 11;
}
.smell1{
    transform: translateX(-107px) rotate(-40deg);
}
.smell2{
    transform: translateX(107px) rotate(20deg);
}
.tongue{
    position: absolute;
    top: 80px;
    left: 50%;
    width: 70px;
    height: 70px;
    margin-left: -35px;
    border: 5px solid #000;
    background: rgb(246,156,168);
    border-radius: 49% 51% 43% 57% / 47% 41% 59% 53% ;
}
.leftTongue{
    transform: translateX(-30px);
    border-right: none;
}
.rightTongue{
    transform: translateX(30px);
    border-left: none;
}
.rightTongue::after{
    content: '';
    position: absolute;
    top: 12px;
    width: 20px;
    height: 20px;
    background: rgb(246,156,168);
}
`
export default string;