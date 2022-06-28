import S from "./Banner.styled";
import { AppleText, PlaystoreText, StatisticsText, LeftText } from "../components";

interface BannerProps {

}

const Banner: React.FC<BannerProps> = () => {

    return (
        <S.Banner>
            <S.LeftSection>
                <S.LeftImg src="/images/triple2x.png" alt="트리플_이미지"/>
                <LeftText/>
            </S.LeftSection>
            <S.RightSection>
                <StatisticsText/>
                <S.AwardsDiv>
                    <S.RightImg src="/images/play-store2x.png" alt="플레이스토어"/>
                    <PlaystoreText/>
                    <S.RightImg src="/images/badge-apple4x.png" alt="애플"/>
                    <AppleText/>
                </S.AwardsDiv>
            </S.RightSection>
        </S.Banner>
    );
}

export default Banner;