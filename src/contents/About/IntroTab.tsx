import React from 'react'
import TabCanvas from "../../components/About/TabCanvas"
import {CanvasItemProps} from "../../components/CanvasItem";
import avatar from '../../assets/img/avatar.png'
import {colors} from "../../styles/theme";
import Card from "../../components/Card";
import CardStack from "../../components/CardStack";
import Button from "../../components/Button";
import githubIcon from '../../assets/icons/github.svg'
import mailIcon from '../../assets/icons/mail.svg'
import measureSize from "../../utils/measureSize";

const IntroTab = () => {

    // Get the size of the button
    const { ref, size: buttonSize } = measureSize<HTMLDivElement>()
    const buttonWidth = buttonSize ? `${buttonSize.width}px` : undefined


    const items: CanvasItemProps[] = [
        {
            id: 'about-intro-avatar',
            x: 96,
            y: 212,
            z: 2,
            children: (
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    alignItems: 'flex-end',
                    width: buttonWidth,
                }}>
                    <Card
                        borderColor={colors.primaryLight}
                        borderWidth={2}
                        w={256}
                        h={256}
                        radius={128}
                    >
                        <img src={avatar} width={'100%'} height={'100%'} alt="My avatar" />
                    </Card>
                    <div style={{width: 'fit-content', height: 'fit-content'}} ref={ref}>
                        <Button
                            text={'github.com/maccha-koubou'}
                            icon={
                                <img width="28" height="28" src={githubIcon}/>
                            }
                        />
                    </div>
                    <Button
                        text={'evelyn.koubou@gmail.com'}
                        icon={
                            <img width="28" height="28" src={mailIcon}/>
                        }
                    />
                </div>
            )
        },
        {
            id: 'about-intro-text',
            x: 324,
            y: 240,
            z: 1,
            children: (
                <CardStack w={520}>
                    <span style={{
                        padding: '40px 40px 40px 160px',
                        fontWeight: '300',
                        fontSize: '20px',
                        color: colors.secondary,
                    }}>
                        I am a product designer and architect. Whether in digital services or physical spaces, I believe design can connect technology, physical world, society, and people. Through design, I aim to bring warm and inclusive responses to systemic problems.
                    </span>
                </CardStack>
            )
        }
    ]

    return (
        <TabCanvas items={items} />
    )
}

export default IntroTab