import { WorkHistory } from '@components/work/WorkHistory'
import { Container } from '@styles/pages/about.styles'
import { List, ListItem, SubTitle, Text } from '@styles/styled-components'

const technologies = [
	'React / Next.js',
	'TypeScript',
	'Node / Express',
	'CosmosDB / Firebase / MongoDB',
	'Redux / React Query',
	'GraphQL / RESTful',
	'PostgreSQL',
	'Serverless Functions',
]

export default function AboutPage() {
	return (
		<Container>
			<SubTitle variant="secondary">About me</SubTitle>
			<Text>
				Hello there! My name is Sebastian and I enjoy creating things that live on
				the world wide web. My interest in web development started back in 2019
				when I decided to try building a website for a friend - turns out hacking
				together a website is a lot of fun!
			</Text>
			<Text>
				Fast-forward to today, I’ve been privileged of working at{' '}
				<span>a start-up</span> and at <span>a large company</span>, giving me the
				opportunity to wear a lot of hats and increase my rate of learning. My
				main focus these days is building tools that improve the day to day of
				humans at <span>Nexient</span>.
			</Text>
			<Text>Here are a few technologies I’ve been working with recently:</Text>
			<List columns={2}>
				{technologies.map(item => (
					<ListItem key={item}>{item}</ListItem>
				))}
			</List>
			<WorkHistory />
		</Container>
	)
}
