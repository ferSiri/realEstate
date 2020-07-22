import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';

function CustomizedPicCar(props) {

    const StyledImg = styled.div`
    ${props => { return props.imagen && 'background-image:url(../../../dist/images/' + props.imagen + '.jpg);' }}
    width: 100%;
    height: 100%;
    background-size: cover;
    repeat: no-repeat;
    `;

    const StyledContainer = styled.div`
    width: 100%;
    height: 100%;
    `;

    const StyledPanel = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    `;

    const SubPanel = styled.div`
    display: flex;
    justify-content: space-between;
    padding:10px;
    `;

    const PublicationPlan = styled.div`
    font-size:0.8em;
    color: #fff;
    font-size: 13px;
    text-shadow: 0 3px 4px rgba(0,0,0,.7);
    `;

    const StyledHeart = styled.div`
    border-radius: 50%;
    background-color: #fff;
    ${props => { return props.isFav && "color: red;" }}
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1.4em;
    width: 1.4em;
    cursor: pointer;
    `;

    const Arrow = styled.div`
    ${props => { return props.lastPic ? "cursor: auto;" : "cursor: pointer;" }}
    ${props => { return props.lastPic && "opacity: 0.2;" }}
    color: #fff;
    text-shadow: 0 3px 4px rgba(0,0,0,.7);
    font-size: 1.3em;
    `;

    const PicNumberContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    `;

    const PicNumber = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    padding: 1px 5px;
    border-radius: 5px;
    background-color: rgba(0,0,0,.6);
    float: right;
    width: 3.3em;
    height: 1.5em;
    font-size: 0.5em;
    margin: 5px 10px;
    `;

    function changePic(direction) {
        let str = props.imagen;
        let num = parseInt(str.split("-")[1]);
        let finalStr = str.split("-")[0];

        if (direction == "left") num -= 1;
        if (direction == "right") num += 1;

        finalStr = finalStr + "-" + num;

        props.selectCurrentCardPic(props.targetId, finalStr);

    }

    let imageNumber = props.imagen && parseInt(props.imagen.split("-")[1]);

    let firstImage = imageNumber == 1;
    let lastImage = imageNumber == 3;


    return (<StyledContainer>
        <StyledImg imagen={props.imagen}>
            <StyledPanel>
                <SubPanel>
                    <PublicationPlan>{props.plan}</PublicationPlan>
                    <StyledHeart onClick={() => props.setFav(props.targetId)} targetId={props.targetId} isFav={props.isFav}><span className={!props.isFav ? "far fa-heart" : "fas fa-heart"}></span></StyledHeart>
                </SubPanel>
                <SubPanel>
                    <Arrow lastPic={firstImage} className="fas fa-chevron-left" onClick={() => firstImage == false ? changePic("left") : null}></Arrow>
                    <Arrow lastPic={lastImage} className="fas fa-chevron-right" onClick={() => lastImage == false ? changePic("right") : null}></Arrow>
                </SubPanel>
                <PicNumberContainer>
                    <PicNumber>
                        <div className="fas fa-camera"></div>
                        <div style={{ paddingTop: "1px" }}>{imageNumber}/3</div>
                    </PicNumber>
                </PicNumberContainer>
            </StyledPanel>
        </StyledImg>
    </StyledContainer>)
}

export default CustomizedPicCar;