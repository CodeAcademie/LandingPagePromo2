const arrayApprenant = [
	{
		firstname:'Bilane',
		lastname:'Abdi Djama',
		photoUrl:'',
		cvUrl: '',
		portfolioUrl:'',
		desc:'',
		love:'',
	},
	{
		firstname:'Jessica',
		lastname:'Anschutz',
		photoUrl:'',
		cvUrl: '',
		portfolioUrl:'',
		desc:'',
		love:'',
	},
	{
		firstname:'Alexandre',
		lastname:'Beauverger',
		photoUrl:'',
		cvUrl: '',
		portfolioUrl:'',
		desc:'',
		love:'',
	},
	{
		firstname:'Alexandre',
		lastname:'Bouttier',
		photoUrl:'',
		cvUrl: '',
		portfolioUrl:'',
		desc:'',
		love:'',
	},
	{
		firstname:'Marine',
		lastname:'Cormier',
		photoUrl:'',
		cvUrl: '',
		portfolioUrl:'',
		desc:'',
		love:'',
	},
	{
		firstname:'Delcourt',
		lastname:'Déborah',
		photoUrl:'',
		cvUrl: '',
		portfolioUrl:'',
		desc:'',
		love:'',
	},
	{
		firstname:'Vassily',
		lastname:'Dubois',
		photoUrl:'',
		cvUrl: '',
		portfolioUrl:'',
		desc:'',
		love:'',
	},
	{
		firstname:'Alexandre',
		lastname:'Douard',
		photoUrl:'',
		cvUrl: '',
		portfolioUrl:'',
		desc:'',
		love:'',
	},
	{
		firstname:'Mhamed',
		lastname:'El haddioui',
		photoUrl:'',
		cvUrl: '',
		portfolioUrl:'',
		desc:'',
		love:'',
	},
	{
		firstname:'Roxane',
		lastname:'Gervais',
		photoUrl:'',
		cvUrl: '',
		portfolioUrl:'',
		desc:'',
		love:'',
	},
	{
		firstname:'Jean-Claude',
		lastname:'Grondin',
		photoUrl:'',
		cvUrl: '',
		portfolioUrl:'',
		desc:'',
		love:'',
	},
	{
		firstname:'Jonathan',
		lastname:'Guillou',
		photoUrl:'',
		cvUrl: '',
		portfolioUrl:'',
		desc:'',
		love:'',
	},
	{
		firstname:'Léa',
		lastname:'Hennebert',
		photoUrl:'',
		cvUrl: '',
		portfolioUrl:'',
		desc:'',
		love:'',
	},
	{
		firstname:'Benoit',
		lastname:'Laurent',
		photoUrl:'',
		cvUrl: '',
		portfolioUrl:'',
		desc:'',
		love:'',
	},
	{
		firstname:'Carole',
		lastname:'Le Roux',
		photoUrl:'',
		cvUrl: '',
		portfolioUrl:'',
		desc:'',
		love:'',
	},
	{
		firstname:'Eliez',
		lastname:'Maigné',
		photoUrl:'',
		cvUrl: '',
		portfolioUrl:'',
		desc:'',
		love:'',
	},
	{
		firstname:'François',
		lastname:'Massiot',
		photoUrl:'',
		cvUrl: '',
		portfolioUrl:'',
		desc:'',
		love:'',
	},
	{
		firstname:'Benjamin',
		lastname:'Mellec',
		photoUrl:'',
		cvUrl: '',
		portfolioUrl:'',
		desc:'',
		love:'',
	},
	{
		firstname:'Claudia',
		lastname:'Mendoza',
		photoUrl:'',
		cvUrl: '',
		portfolioUrl:'',
		desc:'',
		love:'',
	},
	{
		firstname:'Régis',
		lastname:'Nicolo',
		photoUrl:'',
		cvUrl: '',
		portfolioUrl:'',
		desc:'',
		love:'',
	},
	{
		firstname:'Olivier',
		lastname:'Romer',
		photoUrl:'',
		cvUrl: '',
		portfolioUrl:'',
		desc:'',
		love:'',
	},
	{
		firstname:'Florian',
		lastname:'Rouxel',
		photoUrl:'',
		cvUrl: '',
		portfolioUrl:'',
		desc:'',
		love:'',
	},
	{
		firstname:'Romain',
		lastname:'Seite',
		photoUrl:'',
		cvUrl: '',
		portfolioUrl:'',
		desc:'',
		love:'',
	},

];

function Apprenant (firstname, lastname, photoUrl, cvUrl, portfolioUrl, desc ) {
	this.firstname = firstname
	this.lastname = lastname
	this.photoUrl = photoUrl
	this.cvUrl = cvUrl
	this.portfolioUrl = porfolioUrl
	this.desc = desc
}

mainElement = document.getElementByTagName('main');

function randomApprenantSort(array) {
	// TODO Sorting the arrayApprenant
	return array
}

function populateTheDom(array) {
	randomApprenantSort(array);
	array.forEach(function(apprenant){

		let apprenantElement = document.createElement('div')
		apprenantElement.classList.add('apprenant')

		let photoElement = document.createElement('div')
		photoElement.classList.add('photo')
		let photoImg = document.createElement('img')
		photoImg.src = apprenant.photoUrl
		photoElement.appendChild(photoImg)
		apprenantElement.appendChild(photoElement)

		let nameElement = document.createElement('div')
		nameElement.classList.add('name')
		nameElement.innerHTML = apprenant.firstname +' '+ apprenant.lastname
		apprenantElement.appendChild(nameElement)

		let portfolioElement = document.createElement('div')
		portfolioElement.classList.add('portfolio')
		let portfolioLink = document.createElement('a')
		portfolioLink.innerHTML = 'Portfolio'
		portfolioLink.href = apprenant.portfolioUrl
		portfolioElement.appendChild(portfolioLink)
		apprenantElement.appendChild(portfolioElement)

		let cvElement = document.createElement('div')
		cvElement.classList.add('cv')
		let cvLink = document.createElement('a')
		cvLink.innerHTML = 'CV'
		cvLink.href = apprenant.cvUrl
		cvElement.appendChild(cvLink)
		apprenantElement.appendChild(cvElement)

		let loveElement = document.createElement('div')
		loveElement.innerHTML = apprenant.love
		apprenantElement.appendChild(loveElement)

		let descElement = document.createElement('div')
		descElement.classList.add('desc')
		descElement.innerHTML = apprenant.desc
		apprenantElement.appendChild(descElement)

		mainElement.appendChild(apprenantElement)
	});
}
