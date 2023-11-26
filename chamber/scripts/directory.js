const url = './data/members.json';
const membersContainer = document.getElementById('members-container');
const gridViewToggle = document.getElementById('grid-view');
const listViewToggle = document.getElementById('list-view');

let membersData;

async function getMembersInfo() {
  const response = await fetch(url);
  membersData = await response.json();

  displayMembers(membersData.members);
}

function displayMembers(members) {
  membersContainer.innerHTML = '';

  members.forEach((member) => {
    let memberCard = document.createElement('div');
    memberCard.className = 'member-card';

    let memberName = document.createElement('h2');
    memberName.textContent = member.name;

    let memberAddress = document.createElement('p');
    memberAddress.textContent = member.address;

    let memberPhone = document.createElement('p');
    memberPhone.textContent = `Phone: ${member.phone}`;

    let memberWebsite = document.createElement('p');
    memberWebsite.innerHTML = `Website: <a href="${member.website}" target="_blank">${member.website}</a>`;

    let memberImage = document.createElement('img');
    memberImage.src = member.image;
    memberImage.alt = `Logo of ${member.name}`;

    let memberLevel = document.createElement('p');
    memberLevel.textContent = `Membership Level: ${member.membership_level}`;

    memberCard.appendChild(memberName);
    memberCard.appendChild(memberAddress);
    memberCard.appendChild(memberPhone);
    memberCard.appendChild(memberWebsite);
    memberCard.appendChild(memberImage);
    memberCard.appendChild(memberLevel);

    membersContainer.appendChild(memberCard);
  });
}

gridViewToggle.addEventListener('change', () => {
  membersContainer.classList.remove('list-view');
  membersContainer.classList.add('grid-view');
});

listViewToggle.addEventListener('change', () => {
  membersContainer.classList.remove('grid-view');
  membersContainer.classList.add('list-view');
});

getMembersInfo();
