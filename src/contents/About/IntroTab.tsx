import React from 'react'
import TabCanvas from "../../components/About/TabCanvas"
import {CanvasItemProps} from "../../components/CanvasItem";
import avatar from '../../assets/img/avatar.png'
import {colors} from "../../styles/theme";
import Card from "../../components/Card";
import CardStack from "../../components/CardStack";
import Button from "../../components/Button";
import measureSize from "../../utils/measureSize";
import {MailIcon} from "../../assets/icons/MailIcon";
import {GithubIcon} from "../../assets/icons/GithubIcon";

interface IntroTabProps {
    animateIn: boolean;
    animateOut: boolean;
    onAnimationComplete: () => void;
}

const IntroTab = ({
    animateIn,
    animateOut,
    onAnimationComplete,
                  }: IntroTabProps) => {

    // Get the size of the button
    const { ref, size: buttonSize } = measureSize<HTMLDivElement>()
    const buttonWidth = buttonSize ? `${buttonSize.width}px` : undefined


    const items: CanvasItemProps[] = [
        {
            id: 'about-intro-avatar',
            x: 92,
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
                        animateIn={animateIn}
                        animateOut={animateOut}
                        onAnimationComplete={onAnimationComplete}
                    >
                        <img src={avatar} width={'100%'} height={'100%'} alt="My avatar" />
                    </Card>
                    <div style={{width: 'fit-content', height: 'fit-content'}} ref={ref}>
                        <Button
                            text={'github.com/maccha-koubou'}
                            icon={
                                <GithubIcon />
                            }
                            animateIn={animateIn}
                            animateOut={animateOut}
                            onClick={() => window.open('https://github.com/maccha-koubou', '_blank')}
                        />
                    </div>
                    <Button
                        text={'evelyn.koubou@gmail.com'}
                        icon={
                            <MailIcon />
                        }
                        animateIn={animateIn}
                        animateOut={animateOut}
                        onClick={() => window.location.href = 'mailto:evelyn.koubou@gmail.com'}
                    />
                </div>
            )
        },
        {
            id: 'about-intro-text',
            x: 320,
            y: 240,
            z: 1,
            children: (
                <CardStack
                    w={528}
                    animateIn={animateIn}
                    animateOut={animateOut}
                >
                    <article style={{
                        padding: '40px 40px 40px 160px',
                        fontWeight: '300',
                        fontSize: '20px',
                        color: colors.secondary,
                    }}>
                        I am a UX & space designer. From digital services to physical spaces, I believe design can connect technology, society, and people. Through thoughtful, empathetic practice, I aim to respond to complex and systemic challenges with inclusion and connection.
                    </article>
                </CardStack>
            )
        }
    ]

    return (
        <section aria-labelledby="intro-title">
            <h2 style={{
                position: 'absolute',
                width: 1,
                height: 1,
                overflow: 'hidden',
                clip: 'rect(0 0 0 0)'
            }}>
                About Evelyn (She/they)
            </h2>
            <TabCanvas items={items} />
        </section>
    )
}

export default IntroTab