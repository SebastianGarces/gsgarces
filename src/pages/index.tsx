import { useRouter } from 'next/router'
import {
	Container,
	Avatar,
	HeroContainer,
	LineTag,
	TitleContainer,
	MiniBioContainer,
} from '@styles/pages/index.styles'
import { Text, Title, SubTitle, Button } from '@styles/styled-components'

export default function HomePage() {
	const router = useRouter()

	return (
		<Container>
			<HeroContainer>
				<Avatar />
				<TitleContainer>
					<Title>G. Sebastian Garces</Title>
					<SubTitle>Software Engineer</SubTitle>
					<LineTag>I build things for the web</LineTag>
				</TitleContainer>
				<MiniBioContainer>
					<Text mwidth="650px">
						I’m a Cleveland-based software engineer who specializes in
						building (and occacionally designing) exceptional digital
						experiences
					</Text>
					<Text>
						Currently, I’m an engineer at{' '}
						<a href="https://www.nexient.com/" target="_blank">
							Nexient
						</a>
					</Text>
				</MiniBioContainer>

				<Button
					gridArea="button"
					onClick={() => router.push('mailto:gsgarces1@gmail.com')}
				>
					get in touch
				</Button>
			</HeroContainer>
		</Container>
	)
}
