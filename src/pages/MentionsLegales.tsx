const MentionsLegales = () => (
  <>
    <section className="section-padding section-dark">
      <div className="container mx-auto max-w-3xl">
        <h1 className="font-heading text-4xl font-bold text-off-white">Mentions légales</h1>
        <p className="text-off-white/60 font-body mt-2">Site internet : Management Skills</p>
      </div>
    </section>
    <section className="section-padding">
      <div className="container mx-auto max-w-3xl font-body space-y-10 text-foreground/80 leading-relaxed">

        {/* 1. Éditeur */}
        <div>
          <h2 className="font-heading font-bold text-foreground text-xl mb-4">1. Éditeur du site</h2>
          <p>Le présent site est édité par :</p>
          <p className="font-semibold text-foreground mt-2">Management Skills</p>
          <p>Entreprise individuelle</p>
          <p className="mt-2">Responsable de la publication : <strong className="text-foreground">Fabien Berruyer</strong></p>
          <p className="mt-2">Adresse : 59840 Pérenchies – France</p>
          <p>SIRET : 524 383 882</p>
          <p>Code APE / NAF : 70.22Z – Conseil pour les affaires et autres conseils de gestion</p>
          <p>Numéro de TVA intracommunautaire : FR32524383882</p>
          <p className="mt-2">
            Numéro de déclaration d'activité (organisme de formation) : <strong className="text-foreground">32 59 13455 59</strong>
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            Conformément à l'article L.123-1-1 du Code de commerce, l'entreprise est dispensée d'immatriculation au registre du commerce et des sociétés.
          </p>
          <div className="mt-4">
            <p className="font-semibold text-foreground">Contact :</p>
            <p>Email : hello@mmanagement.fr</p>
            <p>Téléphone : 07 81 33 39 09</p>
          </div>
        </div>

        {/* 2. Hébergement */}
        <div>
          <h2 className="font-heading font-bold text-foreground text-xl mb-4">2. Hébergement du site</h2>
          <p>Le site est hébergé par : <strong className="text-foreground">Lovable</strong></p>
          <p>Les infrastructures techniques assurant l'hébergement du site garantissent la sécurité et la disponibilité des services.</p>
        </div>

        {/* 3. Activité */}
        <div>
          <h2 className="font-heading font-bold text-foreground text-xl mb-4">3. Activité du site</h2>
          <p className="mb-3">Le site Management Skills a pour objet de présenter les activités de :</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Conseil stratégique</li>
            <li>Coaching de dirigeants et managers</li>
            <li>Formation professionnelle</li>
            <li>Accompagnement entrepreneurial</li>
            <li>Conférences et interventions pédagogiques</li>
            <li>Production de contenus et analyses en management</li>
          </ul>
          <p className="mt-3">Les informations diffusées sur le site sont fournies à titre informatif et peuvent évoluer à tout moment.</p>
        </div>

        {/* 4. Propriété intellectuelle */}
        <div>
          <h2 className="font-heading font-bold text-foreground text-xl mb-4">4. Propriété intellectuelle</h2>
          <p className="mb-3">
            L'ensemble du contenu présent sur le site (textes, méthodologies, publications, supports pédagogiques, images, graphismes, logos, vidéos, documents téléchargeables) est la propriété exclusive de Management Skills, sauf mention contraire.
          </p>
          <p className="mb-3">
            Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans autorisation écrite préalable.
          </p>
          <p>
            Toute exploitation non autorisée du site ou de son contenu pourra faire l'objet de poursuites conformément aux dispositions du Code de la propriété intellectuelle.
          </p>
        </div>

        {/* 5. Données personnelles */}
        <div>
          <h2 className="font-heading font-bold text-foreground text-xl mb-4">5. Données personnelles</h2>
          <p className="mb-3">
            Les informations collectées via le site (formulaire de contact, échanges commerciaux ou demandes d'information) sont destinées exclusivement à Management Skills afin d'assurer :
          </p>
          <ul className="list-disc list-inside space-y-1 mb-3">
            <li>Le traitement des demandes de contact</li>
            <li>La relation commerciale</li>
            <li>L'amélioration de la qualité de service</li>
          </ul>
          <p className="mb-3">Les données collectées ne sont en aucun cas vendues ni cédées à des tiers.</p>
          <p className="mb-3">
            Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, toute personne dispose :
          </p>
          <ul className="list-disc list-inside space-y-1 mb-3">
            <li>D'un droit d'accès</li>
            <li>D'un droit de rectification</li>
            <li>D'un droit d'effacement</li>
            <li>D'un droit d'opposition</li>
            <li>D'un droit à la limitation du traitement</li>
          </ul>
          <p>Ces droits peuvent être exercés en adressant une demande à : <strong className="text-foreground">hello@mmanagement.fr</strong></p>
        </div>

        {/* 6. Responsabilité */}
        <div>
          <h2 className="font-heading font-bold text-foreground text-xl mb-4">6. Responsabilité</h2>
          <p className="mb-3">
            Management Skills s'efforce de fournir des informations aussi précises que possible sur le site. Toutefois, l'éditeur ne saurait être tenu responsable :
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Des omissions ou inexactitudes</li>
            <li>D'éventuelles indisponibilités du site</li>
            <li>Des dommages directs ou indirects liés à l'utilisation du site</li>
          </ul>
        </div>

        {/* 7. Liens hypertextes */}
        <div>
          <h2 className="font-heading font-bold text-foreground text-xl mb-4">7. Liens hypertextes</h2>
          <p>Le site peut contenir des liens vers des sites externes.</p>
          <p>Management Skills n'exerce aucun contrôle sur ces sites et ne peut être tenu responsable de leur contenu.</p>
        </div>

        {/* 8. Droit applicable */}
        <div>
          <h2 className="font-heading font-bold text-foreground text-xl mb-4">8. Droit applicable</h2>
          <p>Les présentes mentions légales sont soumises au droit français.</p>
          <p>Tout litige relatif à l'utilisation du site relève de la compétence des tribunaux français compétents.</p>
        </div>

      </div>
    </section>
  </>
);

export default MentionsLegales;
